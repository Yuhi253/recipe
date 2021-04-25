# Generated by Django 3.2 on 2021-04-24 14:26

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Item',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('item_choices', models.IntegerField(choices=[(1, '大根'), (2, '人参'), (3, 'もやし'), (4, '卵'), (5, '豚肉'), (6, '牛肉')], verbose_name='食材')),
            ],
        ),
    ]
