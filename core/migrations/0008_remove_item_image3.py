# Generated by Django 3.1.4 on 2020-12-20 15:55

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0007_merge_20201220_1754'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='item',
            name='image3',
        ),
    ]
