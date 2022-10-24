# Generated by Django 4.1.1 on 2022-10-24 13:12

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("music", "0001_initial"),
        ("groups", "0004_post_song"),
    ]

    operations = [
        migrations.AlterField(
            model_name="post",
            name="song",
            field=models.OneToOneField(
                blank=True,
                on_delete=django.db.models.deletion.DO_NOTHING,
                to="music.song",
            ),
        ),
    ]