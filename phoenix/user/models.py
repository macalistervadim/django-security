import django.contrib.auth.models
import django.db
import django.utils.translation as translation


class Profile(django.db.models.Model):
    user = django.db.models.OneToOneField(
        django.contrib.auth.models.User,
        on_delete=django.db.models.CASCADE,
    )
    birthday = django.db.models.DateField(
        translation.gettext_lazy("дата рождения"),
        null=True,
        blank=True,
        help_text=translation.gettext_lazy(
            "Выберите дату своего рождения",
        ),
    )

    class Meta:
        verbose_name = translation.gettext_lazy("дополнительное поле")
        verbose_name_plural = translation.gettext_lazy(
            "дополнительные поля",
        )
        ordering = ("user",)

    def __str__(self):
        return self.user.username[:25]
