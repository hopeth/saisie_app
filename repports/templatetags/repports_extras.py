from django import template
from django.utils import formats
from chws.models import AllData
from si.models import ConsultationReasonList
from repports.models import IndicatorsList
from django.db.models import Q

register = template.Library()


@register.filter(is_safe=True, name="to_str_c")
def to_str_c(v1,v2):
    """Convert to integer."""
    return str(v1) + ',' + str(v2)


@register.filter(is_safe=True, name="dash_data")
def dash_data(value, args):
    """ args = (year,month,district,site) """
    i = args.split(',')
    year = i[0]
    month = i[1]
    district = i[2]
    site = i[3]

    """Type de visite"""
    tv1 = "1"
    tv2 = "2"
    tv3 = "3"
    tv4 = "4"

    AC = "AC"
    NC = "NC"

    if value == 1:
        data = "-"

    if value == 2:
        if i[1] == "All":
            data = AllData.objects.filter(year=year,district=district,site=site,ac_nc=NC,visit_type=tv1).count()
        else:
            data = AllData.objects.filter(year=year,month=month,district=district,site=site,ac_nc=NC,visit_type=tv1).count()

    elif value == 3:
        if i[1] == "All":
            data = "-"
        else:
            data = "-"
   
    elif value == 4:
        if i[1] == "All":
            data = "-"
        else:
            data = "-"
    
    elif value == 5:
        if i[1] == "All":
            data = AllData.objects.filter(year=year,district=district,site=site,visit_type=tv1).count()
        else:
            data = AllData.objects.filter(year=year,month=month,district=district,site=site,visit_type=tv1).count()
   
    elif value == 6:
        if i[1] == "All":
            data = "-"
        else:
           data = "-"
    
    elif value == 7:
        if i[1] == "All":
            data = "-"
        else:
           data = "-"

    elif value == 8:
        if i[1] == "All":
            data = AllData.objects.filter(year=year,district=district,site=site,visit_type=tv1).count()
        else:
            # data = AllData.objects.filter(consultation_reason__contains=["1"],year=year,month=month,district=district,site=site,visit_type=tv1).count()
            # data = AllData.objects.filter(Q(consultation_reason__contains=1) | Q(consultation_reason__contains=["2"]) | Q(consultation_reason__contains=["3"]) | Q(consultation_reason__contains=["4"]),year=year,month=month,district=district,site=site,visit_type=tv1).count()
            # data = AllData.objects.filter(Q(consultation_reason__contained_by=["3"]) ,year=year,month=month,district=district,site=site,visit_type=tv1).count()
            data = AllData.objects.filter(Q(consultation_reason__overlap=["1"]) | Q(consultation_reason__overlap=["2"]) | Q(consultation_reason__overlap=["3"]) | Q(consultation_reason__overlap=["4"]), year=year, month=month, district=district, site=site, visit_type=tv1).count()
            

            # data = len(list(AllData.objects.raw("SELECT * FROM chws_saisie WHERE consultation_reason = '[1,2]'"))) 
    else:
        if i[1] == "All":
           data = "-"
        else:
            data = "-"




    return data





# $dashboard_juillet_asc_pcime_NC = find_by_params('chws_data', $year_field, $year_value, 'id_month', '7', $district_field, $district_value, $site_field, $site_value, 'ac_nc', 'NC', 'id_visit_type', '1')
