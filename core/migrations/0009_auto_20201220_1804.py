# Generated by Django 3.1.4 on 2020-12-20 16:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0008_remove_item_image3'),
    ]

    operations = [
        migrations.AlterField(
            model_name='item',
            name='image1',
            field=models.ImageField(default='01.png', upload_to=''),
        ),
        migrations.AlterField(
            model_name='item',
            name='image2',
            field=models.ImageField(default='01.png', upload_to=''),
        ),
    ]
