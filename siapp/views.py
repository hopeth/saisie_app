from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from datetime import datetime
from django.utils import timezone
from django.urls import reverse
from django.http import HttpResponse, HttpResponseRedirect
from django.contrib.messages.api import add_message
from django.contrib import messages
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from si.models import DistrictList, SiteList, ChwsCodeList, PfList


def home(request):
    return render(request, 'pages/home.html')

# @csrf_exempt
def siteAjax(request):
    if request.is_ajax and request.method == "POST":
        district_id = request.POST.get('data_id')
        if DistrictList.objects.filter(id=district_id).exists():
            sites = SiteList.objects.filter(district_id=district_id)
            data = []
            for site in sites:
                data.append({site.id:site.site})
            return JsonResponse({"valid":True,"data": data}, status=200)
        else:
            return JsonResponse({"valid":False}, status=400)

    return JsonResponse({"valid": False}, status=400)
    
# @csrf_exempt
def chwsAjax(request):
    if request.is_ajax and request.method == "POST":
        site_id = request.POST.get('data_id')
        if SiteList.objects.filter(id=site_id).exists():
            chws_code = ChwsCodeList.objects.filter(site_id=site_id, icp=0)
            data = []
            for chws_code in chws_code:
                data.append({chws_code.id: chws_code.chws_code})
            return JsonResponse({"valid": True, "data": data}, status=200)
        else:
            return JsonResponse({"valid": False}, status=400)

    return JsonResponse({"valid": False}, status=400)

def PfAjax(request):
    if request.is_ajax and request.method == "POST":
        data_id = request.POST.get('data_id')
        data = []
        if data_id == '1':
            pfs = PfList.objects.filter(type_pf=0)
            for pf in pfs:
                data.append({pf.id: pf.pf})
        elif data_id == '2':
            pfs = PfList.objects.filter(type_pf=1)
            for pf in pfs:
                data.append({pf.id: pf.pf})
        else:
            return JsonResponse({"valid": False}, status=400)

        return JsonResponse({"valid": True, "data": data}, status=200)

    return JsonResponse({"valid": False}, status=400)


# def login(request):
#     if request.method == 'POST':
#         username = request.POST['username']
#         password = request.POST['password']
#         post = User.objects.filter(username=username)
#         if post:
#             username = request.POST['username']
#             request.session['username'] = username
#             return redirect("chws_create")
#         else:
#             return render(request, 'login.html', {})
#     return render(request, 'auths/login.html', {'request': request})



# def logout(request):
#     try:
#         del request.session['username']
#     except:
#      pass
#     return render(request, 'auths/login.html', {})

