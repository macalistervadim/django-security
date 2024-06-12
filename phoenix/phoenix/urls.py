import django.conf
import django.contrib
import django.urls


urlpatterns = [
    django.urls.path("admin/", django.contrib.admin.site.urls),
    django.urls.path("", django.urls.include("homepage.urls")),
]

if django.conf.settings.DEBUG:
    import debug_toolbar
    import django.conf.urls.static

    STATIC_ROOT = django.conf.urls.static.static
    urlpatterns += (
        [
            django.urls.path(
                "__debug__/",
                django.urls.include(debug_toolbar.urls),
            ),
        ]
        + STATIC_ROOT(
            django.conf.settings.STATIC_URL,
            document_root=django.conf.settings.STATICFILES_DIRS,
        )
        + STATIC_ROOT(
            django.conf.settings.MEDIA_URL,
            document_root=django.conf.settings.MEDIA_ROOT,
        )
    )
