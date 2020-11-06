# from django.core.exceptions import  PermissionDenied
# from .models import CareOrFollowUpList
# from django.http import HttpResponse, HttpResponseRedirect
# from django.urls import reverse
from django.shortcuts import redirect
from functools import wraps


def auth_required(function):
    def _decorator(request, *args, **kwargs):
        if request.user.is_anonymous:
            return redirect('/')
        else:
            pass

    # if request.user.is_authentificated:
    #     print('authentificated')

    # else:
    #     print('need auth')

    return wraps(function)(_decorator)
