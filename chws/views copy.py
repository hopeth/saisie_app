# from .forms import ChwsForm
# from django.shortcuts import render
# from chws.models import AllData
# from si.models import DistrictList, SiteList, PromptnessList, ConsultationReasonList, Year, Month
# from django.contrib import messages
# from django.shortcuts import redirect
# from django.contrib.messages.api import add_message
# from django.http import HttpResponse, HttpResponseRedirect
# from django.urls import reverse
# from si.templatetags.functions_extras import to_year, div_or_int_or_0, system_date, date_convert, sha1Hash, sha256Hash, motifs_vadation, year_month_between_26_and_25
# from siapp import constantes
# from django.utils import timezone
# from datetime import datetime
# from django.contrib.auth.models import User
# from django.contrib.auth.decorators import login_required
# from si.decorators import auth_required


# # @auth_required
# @login_required
# def ChwsData(request, id="", param="", all=""):
#     if request.session.has_key('username'):
#         form = ChwsForm(request.POST)
#         user_id = User.objects.get(username=request.session['username']).id

#         if request.session.get('date') != "":
#             datas = AllData.objects.all().order_by('-created_at')
#         else:
#             datas = AllData.objects.all().order_by('-created_at')[0:200]
#         districts = DistrictList.objects.all()
#         motifConsultations = ConsultationReasonList.objects.all()

#         btn = False
#         autre_motif = False
#         m_districts = ''
#         m_sites = ''
#         m_consultation_reason = ''
#         m_date = request.session.get('date')

#         if request.session.get('district_id') != "" and request.session.get('district_id') != None:
#             if SiteList.objects.filter(district=request.session.get('district_id')) != None:
#                 sites = SiteList.objects.filter(district=request.session.get('district_id'))
#             else:
#                 sites = ""
#         else:
#             sites = ""



#         if request.session.get('district_id') != "" and request.session.get('district_id') != None:
#             e_district_id = request.session.get('district_id')
#         else:
#             e_district_id = ''
#         if request.session.get('site_id') != "" and request.session.get('site_id') != None:
#             e_site_id = request.session.get('site_id')
#         else:
#             e_site_id = ''
        
#         if request.session.get('district_v') != "" and request.session.get('district_v') != None:
#             e_district_v = request.session.get('district_v')
#         else:
#             e_district_v = ''
#         if request.session.get('site_v') != "" and request.session.get('site_v') != None:
#             e_site_v = request.session.get('site_v')
#         else:
#             e_site_v = ''
       
#         e_consultation_reason = ''

#         if request.session.get('date_from') != "" and request.session.get('date_from') != None:
#             date_from = request.session.get('date_from')
#         else:
#             date_from = ''
#         if request.session.get('date_to') != "" and request.session.get('date_to') != None:
#             date_to = request.session.get('date_to')
#         else:
#             date_to = ''
        

#         #MAKE EMPTY SESSION DATA
#         try:
#             request.session['district_id'] = ""
#             request.session['site_id'] = ""
#             request.session['district_v'] = ""
#             request.session['site_v'] = ""
#             request.session['date'] = ""
#             request.session['date_from'] = ""
#             request.session['date_to'] = ""
#         except:
#             pass


#         if request.method == 'POST':
#             rp = request.POST

#             if rp.get('submit_asc_data') == "Valider la db_data" or rp.get('submit_asc_data') == "Modifier la Saisie":
#                 errors = []
#                 year_old = round(to_year(rp.get('age_year'), rp.get('age_month'), rp.get('age_semaine'), rp.get('age_jour')), 2)

#                 post_consultation_reasons = motifs_vadation(request)

#                 if len(post_consultation_reasons) > 1 and 9 in post_consultation_reasons:
#                     errors += {messages.error(request, "Vous ne pouvez pas choisir 'Motif NR' si un motif exist !")}


#                 if div_or_int_or_0(rp.get('visit_type')) == 1:
#                     if year_old > 5.01:
#                         errors += {messages.error(request, "l'Age de l'enfant ne peut pas dépasser 5 ans")}

#                     if post_consultation_reasons == "":
#                         errors += {messages.error(request, "Vous n'avez choisie aucun Motif de Consultation pour cette PCIME !")}

#                 if div_or_int_or_0(rp.get('visit_type')) == 2  or div_or_int_or_0(rp.get('visit_type')) == 3 :
#                     if year_old > 0.01 and year_old <= 12 or year_old > 90.01:
#                         errors += {messages.error(
#                             request, "l'Âge de la femme doit être comprise entre 12 et 90 ans")}

#                 if rp.get('age_year') == "" and rp.get('age_month') == "" and rp.get('age_semaine') == "" and rp.get('age_jour') == "":
#                     if div_or_int_or_0(rp.get('visit_type')) == 4 or div_or_int_or_0(rp.get('visit_type')) == 5:
#                         year_old = ""
#                     else:
#                         errors += {messages.error(request, "Renseigner l'Âge SVP !!!")}
#                 elif div_or_int_or_0(rp.get('age_year')) == 0 and div_or_int_or_0(rp.get('age_month')) == 0 and div_or_int_or_0(rp.get('age_semaine')) == 0 and div_or_int_or_0(rp.get('age_jour')) == 0:
#                     year_old = "NR"

#                 if rp.get('district') == "":
#                     errors += {messages.error(request,"Renseigner le champs 'District'")}

#                 if rp.get('site') == "":
#                     errors += {messages.error(request,"Renseigner le champs 'Site'")}

#                 if date_convert(rp.get('date')) > system_date():
#                     errors += {messages.error(request, "La Date Doit Être Au Passé. Modifier Pour Continuer!!!")}

#                 if date_convert(rp.get('date')) < constantes.START_DATE or date_convert(rp.get('date')) > constantes.END_DATE:
#                     errors += {messages.error(request, "La Date Doit Être comprise entre le <strong style='font-size:20px;'>{}</strong> et le <strong style='font-size:20px;'>{}</strong>. <br> Veuillez Contacter l'Administrateur Si le Problème Persiste!".format(date_convert(constantes.START_DATE, "fr"), date_convert(constantes.END_DATE, "fr")))}

#                 if div_or_int_or_0(rp.get('save_while_value')) > 51:
#                     errors += {messages.error(request,"Le Nombre d'enrégistrement Souhaité est Limité à <strong style='font-size:20px;'>{}</strong> pour des raisons de sécurité!".format(50))}
                    

#                 if errors != []:
#                     typeVisite = div_or_int_or_0(rp.get('visit_type'))
#                     pf_administered_yes_or_no = div_or_int_or_0(rp.get('pf_administered_yes_or_no')) 
#                     autre_motif = div_or_int_or_0(rp.get('autre_motif'))
#                     age_year = rp.get('age_year')
#                     age_month = rp.get('age_month')
#                     age_semaine = rp.get('age_semaine')
#                     age_jour = rp.get('age_jour')
                    
                    
#                     e_typeVisite_id = rp.get('visit_type')
#                     e_district_id = rp.get('district')
#                     e_site_id = rp.get('site')

#                     e_district_v = DistrictList.objects.get(id=rp.get('district'))
#                     e_site_v = SiteList.objects.get(id=rp.get('site'))

#                     m_date = date_convert(rp.get('date'))
#                     sites = SiteList.objects.filter(district=rp.get('district'))

#                     e_consultation_reason = motifs_vadation(request)

#                 if errors == []:
#                     #SAVE IN SESSION
#                     request.session['district_id'] = rp.get('district')
#                     request.session['site_id'] = rp.get('site')
#                     request.session['district_v'] = str(DistrictList.objects.get(id=rp.get('district')))
#                     request.session['site_v'] = str(SiteList.objects.get(id=rp.get('site')))

#                     request.session['date'] = date_convert(rp.get('date'))
#                     e_district_id = request.session.get('district_id')
#                     e_site_id = request.session.get('site_id')
#                     e_district_v = request.session.get('district_v')
#                     e_site_v = request.session.get('site_v')
#                     m_date = request.session.get('date')

#                     if id == "":
#                         db_data = AllData()
#                         db_data.id = sha1Hash(sha256Hash(user_id, timezone.now(), 1), 1)
#                         db_data.user_who_create = User.objects.get(pk=user_id)
#                     else:
#                         db_data = AllData.objects.get(pk=id)
#                         db_data.number_of_modification = int(db_data.number_of_modification) + 1
#                         db_data.updated_at = timezone.now()
#                         db_data.user_who_update = User.objects.get(pk=user_id)

#                         db_data.district = DistrictList.objects.get(id=rp.get('district'))
#                         db_data.site = SiteList.objects.get(id=rp.get('site'))
#                         db_data.date = rp.get('date')

#                         db_data.year = Year.objects.get(year=year_month_between_26_and_25(rp.get('date'),rp.get('district'))[0])
#                         db_data.month = Month.objects.get(id=year_month_between_26_and_25(rp.get('date'),rp.get('district'))[1])
                        
#                         db_data.consultation_reason = post_consultation_reasons

#                         db_data.promptness = rp.get('promptness')
#                         db_data.comment = rp.get('comment')

#                         db_data.save()

#                     if param == "":
#                         messages.success(request, "Sauvegardé avec Succès")
#                         return HttpResponseRedirect(reverse('chws_create'))
#                     else:
#                         messages.success(request, "Modifié avec Succès")
#                         return redirect('{}?#d{}'.format(reverse('chws_create'), id))
        
#             elif rp.get('find_by_date') == "Valider":
#                 start = rp.get('date_from')
#                 end = rp.get('date_to')

#                 request.session['date_from'] = start
#                 request.session['date_to'] = end

#                 date_from = request.session.get('date_from')
#                 date_to = request.session.get('date_to')

#                 if start != '' and end !='':
#                     datas = AllData.objects.filter(date__range=[start, end])
#                 else:
#                     messages.danger(request, "Vous devez préciser la date de Début et la date de Fin")
#                     return HttpResponseRedirect(reverse('chws_create'))
            
#             elif rp.get('delete_selection') == "Supprimer la Selection":
#                 r = []   
#                 datas = AllData.objects.all()
#                 if datas != "":
#                     if datas != None:
#                         for data in datas:
#                             r.append(str(data.id))
#                             # r.append(rp.get(str(data.id)))
#                 for i in r:
#                     AllData.objects.filter(id=i).delete() 
                    
#                 messages.danger(request, "Les Données Séléctionnées Ont été Supprimées avec Succès")
#                 return HttpResponseRedirect(reverse('chws_create'))

#             else:
#                 messages.warning(request, "Problème avec le formulaire, veuillez réessayer plus tard!")
#                 return HttpResponseRedirect(reverse('chws_create'))
                
#         if request.method == 'GET':
#             if id != "":
#                 datas = AllData.objects.filter(pk=id)
#                 if param != "" and param == 'delete':
#                     datas.delete()
#                     messages.danger(request, "Données Supprimées avec Succès")
#                     return HttpResponseRedirect(reverse('chws_create'))
#                 else:
#                     s = AllData.objects.get(pk=id)
#                     form = ChwsForm(instance=s)
#                     btn = True
                    
#                     for data in datas:
#                         m_districts = data.district
#                         m_sites = data.site
#                         m_date = date_convert(data.date)
#                         m_consultation_reason = data.consultation_reason

#                         sites = SiteList.objects.filter(district = data.district.id)

#                         if '8' in data.consultation_reason:
#                             autre_motif = True

#         else:
#             pass
        
#         if all != "" and all == 'deleteall':
#             AllData.objects.all().delete()
#             messages.danger(request, "Toutes Les Données Ont été Supprimées avec Succès")
#             return HttpResponseRedirect(reverse('chws_create'))

#         return render(request, 'pages/chws.html', {
#             'form': form,
#             'datas': datas,
#             'btn': btn,
#             'autre_motif': autre_motif,

#             'districts': districts,
#             'sites': sites,
#             'm_districts': m_districts,
#             'm_sites': m_sites,
#             'm_date': m_date,
#             'm_consultation_reason': m_consultation_reason,

#             'e_district_id': e_district_id,
#             'e_site_id': e_site_id,
            
#             'e_district_v': e_district_v,
#             'e_site_v': e_site_v,

#             'motifConsultations': motifConsultations,
#             'e_consultation_reason': e_consultation_reason,
#             'date_from': date_from,
#             'date_to': date_to,

#             'page': 'chws'
#         })

#     else:
#         return render(request, 'auths/login.html', {})
