# Generated by Django 3.0.6 on 2020-07-22 13:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('customers', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='location',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
