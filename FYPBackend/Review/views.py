from re import T
from django.shortcuts import render
from rest_framework.views import APIView, Response
from .serializers import ReviewSerializer, ReviewPostSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Review
from Bills.models import Bill

# Create your views here.


class HouseReviewAPIView(APIView):
    permission_classes = [IsAuthenticated]
    serializer_class = ReviewPostSerializer

    def get(self, request, pk, *args, **kwargs):
        reviews = Review.objects.filter(house=pk)
        # bills = Bill.objects.all()
        # user = request.user
        # tenantBills = bills.filter(house=pk, tenant=request.user.id)
        # if tenantBills.exis():
        serializer = ReviewSerializer(reviews, many=True)
        return Response(serializer.data)

    def post(self, request, pk, *args, **kwargs):
        reviews = Review.objects.filter(house=pk)
        bills = Bill.objects.all()
        user = request.user

        if not user.type == "TENANT":
            return Response("You must be a tenant to add reviews", status=500)

        tenantBills = bills.filter(
            house=pk, tenant=user.id, status="PAID")

        previousReviews = Review.objects.filter(house=pk, tenant=user)

        if previousReviews.exists():
            return Response("You cannot review the same house twice", status=500)

        if not tenantBills.exists():
            return Response("You are not qualified to review this house", status=500)

        serializer = ReviewPostSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response("Review aded successfully")
        return Response(serializer.errors)


class AllHouseReviewAPIView(APIView):
    permission_classes = [IsAuthenticated]
    serializer_class = ReviewPostSerializer

    def get(self, request, *args, **kwargs):
        reviews = Review.objects.all()
        serializer = ReviewSerializer(reviews, many=True)
        return Response(serializer.data)
