import django.shortcuts


def homepage(request):
    template = "homepage/home.html"

    return django.shortcuts.render(request, template)
