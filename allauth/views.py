from django.shortcuts import render, redirect
from .forms import UserForm, UserProfileInfoForm, ProfileForm
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponseRedirect, HttpResponse
from django.urls import reverse
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.views.generic import UpdateView
from django.urls import reverse_lazy
from .models import UserProfileInfo

from django.contrib import messages

from si.templatetags.functions_extras import sha1Hash, sha256Hash


from django.contrib.auth.hashers import MD5PasswordHasher, make_password, mask_hash, SHA1PasswordHasher, BCryptSHA256PasswordHasher, PBKDF2SHA1PasswordHasher, UnsaltedSHA1PasswordHasher


def index(request):
    return render(request, 'auths/index.html')

@login_required
def user_logout(request):
    logout(request)
    try:
        del request.session['username']
        request.session['username'] = ""
    except:
        pass

    messages.info(request, "Vous Êtes Déconnecté avec Succès!")
    return HttpResponseRedirect(reverse('login'))


def user_register(request):
    registered = False
    if request.method == 'POST':
        user_form = UserForm(data=request.POST)
        profile_form = UserProfileInfoForm(data=request.POST)
        username = request.POST.get('username')
        password = request.POST.get('password')
        password_confirm = request.POST.get('password_confirm')
        profile_pic = request.POST.get('profile_pic')
        user = authenticate(username=username, password=password)
        # if user_form.is_valid() and profile_form.is_valid():
        if password == password_confirm:
            if user_form.is_valid():
                user = user_form.save()
                # user.set_password(BCryptSHA256PasswordHasher.encode(request.POST.get('password'),''))
                user.set_password(user.password)
                user.save()

                profile = profile_form.save(commit=False)
                profile.user = user
                user_id = str(user.id)

                if profile_pic != "":
                    # if user_id not in request.FILES:
                    #     import os
                    #     BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
                    #     os.mkdir('{}{}{}'.format(BASE_DIR, '/media/profile_pics/', user_id), 777)
                    # # profile.profile_pic = request.FILES['{}{}'.format(BASE_DIR, '/media/profile_pics/', user_id)]
                    profile.profile_pic = request.FILES['profile_pic']
                    profile.profile_pic_thumb = request.FILES['profile_pic']

                try:
                    profile.save()
                    login(request, user)
                    request.session['username'] = username
                    datas = UserProfileInfo.objects.filter(user_id=user_id)
                    for data in datas:
                        request.session['small_user_profile_img_url'] = str(data.profile_pic_thumb)
                        request.session['large_user_profile_img_url'] = str(data.profile_pic)

                    registered = True

                    messages.success(request, "Enrégistrement fait avec Succès!")

                    return redirect('profile')
                except:
                    pass
                
            else:
                print(user_form.errors, profile_form.errors)
        else:
            print(user_form.errors, profile_form.errors)
    else:
        user_form = UserForm()
        profile_form = UserProfileInfoForm()
   

    return render(request, 'auths/registration.html',{'user_form': user_form,'profile_form': profile_form,'registered': registered})


def user_login(request):
    error = ""
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(username=username, password=password)
        if user:
            if user.is_active:
                login(request, user)
                request.session['username'] = username
                user_id = User.objects.get(username=username).id
                datas = UserProfileInfo.objects.filter(user_id=user_id)

                for data in datas:
                    request.session['small_user_profile_img_url'] = str(data.profile_pic_thumb)
                    request.session['large_user_profile_img_url'] = str(data.profile_pic)
                
                messages.info(request, "Vous vous êtes connecté avec Succès!")

                return redirect('chws_create')
                # return HttpResponseRedirect(reverse('chws_create'))
            else:
                # return HttpResponse("Your account was inactive.")
                error = 'Votre Compte est inactif! SVP contacter votre administrateur.'
        else:
            error = 'Pseudo ou Mot de passe Incorrect. Relancer!!'
            # print("Someone tried to login and failed.")
            # print("They used username: {} and password: {}".format(username, password))
            # return HttpResponse("Invalid login details given")
    
    return render(request, 'auths/login.html', {'error': error})


@login_required
def user_profile(request):
    Image_is_not_save = False
    if request.session.has_key('username'):
        posts = request.session['username']
        user_id = User.objects.get(username=posts).id

        query_user = User.objects.get(pk=user_id)

        Image_profile_form = UserProfileInfoForm(data=request.POST)

        if UserProfileInfo.objects.filter(user_id=user_id):
            query_profile = UserProfileInfo.objects.get(user_id=user_id)
            profile_form = UserProfileInfoForm(instance=query_profile)
        else:
            profile_form = UserProfileInfoForm()

        user_form = ProfileForm(instance=query_user)
        
        if request.method == 'POST':
            user = User.objects.get(pk=user_id)
            user.first_name = request.POST.get('first_name')
            user.last_name = request.POST.get('last_name')
            user.save()

            pic = request.POST.get('profile_pic')

            if UserProfileInfo.objects.filter(user_id=user_id):
                profile = UserProfileInfo.objects.get(user_id=user_id)
                if pic != "":
                    profile.delete()
            else:
                profile = profile_form.save(commit=False)
                profile.user = user

            if pic != "":
                profile.profile_pic = request.FILES['profile_pic']
                profile.profile_pic_thumb = request.FILES['profile_pic']

            profile.biography = request.POST.get('biography')

            try:
                profile.save()
                messages.success(request,"Modifié avec Succès")
                return redirect('profile')
            except:
                Image_is_not_save = True

        datas = UserProfileInfo.objects.filter(user_id=user_id)

        for data in datas:
            request.session['small_user_profile_img_url'] = str(data.profile_pic_thumb)
            request.session['large_user_profile_img_url'] = str(data.profile_pic)
        return render(request, 'auths/profiles.html', {"user_form": user_form, 'profile_form': profile_form, 'Image_profile_form': Image_profile_form, 'Image_is_not_save': Image_is_not_save})
    else:
        return render(request, 'auths/login.html', {})


# # Edit Profile View
# class ProfileView(UpdateView):
#     model = User
#     form_class = ProfileForm
#     success_url = reverse_lazy('home')
#     template_name = 'auths/profiles.html'
