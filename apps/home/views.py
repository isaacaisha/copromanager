from django.shortcuts import render
from django.utils.translation import gettext as _
from django.utils import timezone

# Create your views here.

def index(request):

    context = {
        'date': timezone.now().strftime(_("%a %d %B %Y")),
        }
    return render(request, 'index.html', context)
