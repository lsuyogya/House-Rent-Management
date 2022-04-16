# Generated by Django 4.0.3 on 2022-04-11 05:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('House', '0002_alter_house_status'),
    ]

    operations = [
        migrations.AlterField(
            model_name='house',
            name='status',
            field=models.CharField(choices=[('AVAILABLE', 'Available'), ('OCCUPIED', 'Occupied'), ('INACTIVE', 'Inactive')], default='AVAILABLE', max_length=50),
        ),
    ]
