# Generated by Django 4.0.3 on 2022-04-15 13:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Bills', '0004_bill_status'),
    ]

    operations = [
        migrations.AddField(
            model_name='bill',
            name='creationDate',
            field=models.DateTimeField(auto_now_add=True, null=True),
            preserve_default=False,
        ),
    ]
