import hashlib
from django import template
from django.utils import formats
from datetime import datetime
from si.models import ConsultationReasonList
register = template.Library()


@register.filter(is_safe=True, name="to_int")
def to_int(value):
    """Convert to integer."""
    return int(float(value))


@register.filter(is_safe=True, name="time_diff")
def time_diff(value):
    """Convert to integer and add 5"""
    ds = int(formats.date_format(datetime.now(), 'YmdHis'))
    de = int(formats.date_format(value, 'YmdHis'))
    r = ds - de
    return r
    return int(float(value)) - 5


@register.filter(is_safe=True, name="to_age")
def to_age(value, arg=None):
    if value != "NR":
        age_year = int(float(value))
        age_month = int((float(value) - age_year)*12)
        age_semaine = int(((float(value) - age_year)*12 - int(age_month))*4.34524)
        age_jour = int((((float(value) - age_year)*12 - int(age_month))*4.34524 - int(age_semaine))*7)
   
        if age_year > 0 and arg == 'year':
            return '<strong>' + str(age_year) + ' ans </strong>'
        elif age_year > 0 and age_month > 0:
            return '<strong>' + str(age_year) + ' ans ' + str(age_month) + ' month </strong>'
        elif age_month > 0 and age_semaine > 0:
            return '<strong>' + str(age_month) + ' month ' + str(age_semaine) + ' sem </strong>'
        elif age_semaine > 0 and age_jour > 0:
            return '<strong>' + str(age_semaine) + ' sem ' + str(age_jour) + ' jrs </strong>'

        elif age_year > 0 and age_month == 0 and age_semaine == 0 and age_jour == 0:
            return '<strong>' + str(age_year) + ' ans </strong>'
        elif age_year == 0 and age_month > 0 and age_semaine == 0 and age_jour == 0:
            return '<strong>' + str(age_month) + ' month </strong>'
        elif age_year == 0 and age_month == 0 and age_semaine > 0 and age_jour == 0:
            return '<strong>' + str(age_semaine) + ' sem </strong>'
        elif age_year == 0 and age_month == 0 and age_semaine == 0 and age_jour > 0:
            return '<strong>' + str(age_jour) + ' jrs </strong>'

        elif age_year > 0 and age_month == 0 and age_semaine > 0 and age_jour == 0:
            return '<strong>' + str(age_year) + ' ans ' + str(age_semaine) + ' sem </strong>'
        elif age_year > 0 and age_month == 0 and age_semaine == 0 and age_jour > 0:
            return '<strong>' + str(age_year) + ' ans ' + str(age_jour) + ' jrs </strong>'

        elif age_year == 0 and age_month > 0 and age_semaine == 0 and age_jour > 0:
            return '<strong>' + str(age_month) + ' month ' + str(age_jour) + ' jrs </strong>'

        elif age_year > 0:
            return '<strong>' + str(age_year) + ' ans </strong>'
        elif age_year == 0 and age_month > 0:
            return '<strong>' + str(age_month) + ' month </strong>'
        elif age_month == 0 and age_semaine > 0:
            return '<strong>' + str(age_semaine) + ' sem </strong>'
        elif age_semaine == 0 and age_jour > 0:
            return '<strong>' + str(age_jour) + ' jrs </strong>'

        else:
            return '<strong>Age NR</strong>'
    else:
        return '<strong>Age NR</strong>'


@register.filter(is_safe=True, name="to_motif_label")
def to_motif_label(value, field_to_show_for_autre_motif=None):
    """Show Motif label with his id."""
    i=1
    r=''

    while i <= len(ConsultationReasonList.objects.all()):
        if i in value:
            if ConsultationReasonList.objects.get(id=i).motifs != 'autre_motif':
                r+=str(ConsultationReasonList.objects.get(id=i).label) + ' '
            else:
                if field_to_show_for_autre_motif != None:
                    r+=str(field_to_show_for_autre_motif) + ' '
                else:
                    r+=' '
            pass
        i+=1

    return r


@register.filter(is_safe=True, name="was_checked")
def was_checked(value, arg):
    v = ''
    if value != "" and value != None:
        if arg in value:

            v += 'checked'
    return v


"""
#################################
FUNCTIONS
#################################
"""


"""##############################################################################################################################"""
def div_or_int_or_0(data, divider=0):
    """ Return 0 or int of value or result of division """
    if data == '' or data == '0' or data == 0 or data == None:
        return 0
    else:
        if divider == 0 or divider == '0' or divider == '':
            return int(data)
        else:
            return int(data)/divider


"""##############################################################################################################################"""
def to_year(year, month, week, day):
    """ Convert arguments to one year """
    convert_to_year = (div_or_int_or_0(year, 1) + div_or_int_or_0(month, 12) + div_or_int_or_0(week, 52.1429) + div_or_int_or_0(day, 365) + div_or_int_or_0(1, 365))
    return convert_to_year


"""##############################################################################################################################"""
def system_date(args=0):
    """ Return date in date format with args """
    from time import gmtime, strftime
    arg = str(args)
    if arg == "fr":
        """ Return date in french format """
        return strftime("%d/%m/%Y", gmtime())
    elif arg == "Y":
        """ Return Year """
        return strftime("%Y", gmtime())
    elif arg == "m":
        """ Return Month """
        return strftime("%m", gmtime())
    elif arg == "d":
        """ Return day """
        return strftime("%d", gmtime())
    elif arg == "H":
        """ Return Hour """
        return strftime("%H", gmtime())
    elif arg == "M":
        """ Return Minute """
        return strftime("%M", gmtime())
    elif arg == "S":
        """ Return Second """
        return strftime("%S", gmtime())

    elif arg == "f":
        """ Return Microsecond """
        return strftime("%f", gmtime())

    else:
        """ Return date in english format """
        return strftime("%Y-%m-%d", gmtime())



"""##############################################################################################################################"""
def date_convert(date_value, args=0):
    """ Return date in Y-m-d format """
    date_str = str(date_value)
    arg = str(args)

    try:
        if int(len(date_str)) == 7:
            date = datetime.strptime(date_str, "%Y-%m")
        elif int(len(date_str)) == 10:
            date = datetime.strptime(date_str, "%Y-%m-%d")
        elif int(len(date_str)) == 13:
            date = datetime.strptime(date_str, "%Y-%m-%d %H")
        elif int(len(date_str)) == 16:
            date = datetime.strptime(date_str, "%Y-%m-%d %H:%M")
        elif int(len(date_str)) == 19:
            date = datetime.strptime(date_str, "%Y-%m-%d %H:%M:%S")
        elif int(len(date_str)) >= 21 and int(len(date_str)) <= 26:
            date = datetime.strptime(date_str, "%Y-%m-%d %H:%M:%S.%f")
        else:
            date = 0
    except:
        date = 0



    if date != 0:
        """ Return True data """
        if int(date.month) < 10:
            month = "0" + str(date.month)
        else:
            month = str(date.month)

        if int(date.day) < 10:
            day = "0" + str(date.day)
        else:
            day = str(date.day)

        if arg == "FDTE":
            """ Return full date with time in English format """
            return str(date.year) + "-" + str(month) + "-" + str(day) + str(date.hour) + ":" + str(date.minute) + ":" + str(date.second)
        elif arg == "FDTF":
            """ Return full date with time in french format """
            return str(day) + "/" + str(month) + "/" + str(date.year) + str(date.hour) + ":" + str(date.minute) + ":" + str(date.second)
        elif arg == "fr":
            """ Return date in french format """
            return str(day) + "/" + str(month) + "/" + str(date.year)
        elif arg == "Y":
            """ Return Year """
            return str(date.year)
        elif arg == "m":
            """ Return Str Month Id """
            return str(month)
        elif arg == "mFr":
            """ Return Int Month Id """
            return int(date.month)
        elif arg == "d":
            """ Return day """
            return str(day)
        elif arg == "H":
            """ Return Hour """
            return str(date.hour)
        elif arg == "M":
            """ Return Minute """
            return str(date.minute)
        elif arg == "S":
            """ Return Second """
            return str(date.second)
        elif arg == "f":
            """ Return Microsecond """
            return str(date.microsecond)
        elif arg == "FH":
            """ Return full Hour """
            return str(date.hour) + ":" + str(date.minute) + ":" + str(date.second)
        else:
            """ Return date in english format """
            return str(date.year) + "-" + str(month) + "-" + str(day)

    else:
        """ Return False data """
        return "Mauvais format"

"""##############################################################################################################################"""


def sha1Hash(value1, value2='', value3=''):
    """algorithm = sha1"""
    if value2 == '' and value3 == '':
        hash = hashlib.sha1((str(value1)).encode()).hexdigest()
    else:
        hash = hashlib.sha1((str(value1) + str(value2) + str(value3)).encode()).hexdigest()
    return hash


def sha256Hash(value1, value2='', value3=''):
    """algorithm = sha256"""
    if value2 == '' and value3 == '':
        hash = hashlib.sha256((str(value1)).encode()).hexdigest()
    else:
        hash = hashlib.sha256((str(value1) + str(value2) + str(value3)).encode()).hexdigest()
    return hash


def MD5Hash(value1, value2='', value3=''):
    """algorithm = md5"""
    if value2 == '' and value3 == '':
        hash = hashlib.md5((str(value1)).encode()).hexdigest()
    else:
        hash = hashlib.md5((str(value1) + str(value2) + str(value3)).encode()).hexdigest()
    return hash


def motifs_vadation(request):
    r = list()
    motifs = ConsultationReasonList.objects.all()
    for motif in motifs:
        if request.POST.get(motif.motifs) != None:
            r.append(int(request.POST.get(motif.motifs)))
    # if len(r) > 0:
    return r
    # else:
    #     return ""






# rp = 
# if rp.get
#     v=''
#     for i in value:
#         if .motifs != 'autre_motif':
#             v += str(ConsultationReasonList.objects.get(id=i).label) + ' '
#         else:
#             v += str(field_to_show_for_autre_motif) + ' '
#     return v




def year_month_between_26_and_25(date_action = "", district = ""):
    if date_action != "" and district != "":
        date = datetime.strptime(str(date_action), "%Y-%m-%d")
        year = str(date.year)

        if int(date.month) < 10:
            month = "0" + str(date.month)
        else:
            month = str(date.month)

        if int(date.day) < 10:
            day = "0" + str(date.day)
        else:
            day = str(date.day)

        str_date = str(date.year) + "-" + str(month) + "-" + str(day)    

        year_int = int(date.year)
        next_year = int(date.year) + 1

        int_month = int(date.month)

        if (int(date.month) - 1) == 0:
            """ Nous somme en Janvier """
            prev_int_month = 12
            prev_str_month = "12"
            next_str_month = "02"
            next_int_month = 2
        else:
            prev_int_month = int(date.month) - 1
            next_int_month = int(date.month) + 1
            
            if prev_int_month < 10:
                prev_str_month = "0" + str(prev_int_month)
                next_str_month = "0" + str(next_int_month)
            else:
                prev_str_month = str(prev_int_month)
                next_str_month = str(next_int_month)

        day = str(date.day)

        if district == "2":
            if str_date >= str(year) + "-12-23"  and str_date < str(next_year) + "-01-01":
                return [next_year,1]

            elif str_date >= str(year) + "-01-01"  and str_date <= str(year) + "-01-22":
                return [year_int,1]

            elif str_date >= str(year) + "-" + month + "-23"  and str_date < str(year) + "-" + next_str_month + "-01":
                return [year_int,next_int_month]

            elif str_date >= str(year) + "-" + month + "-01"  and str_date <= str(year) + "-" + month + "-22":
                return [year_int,int_month]

            else:
                return [0,0]

        else:

            if str_date >= str(year) + "-12-26"  and str_date < str(next_year) + "-01-01":
                return [next_year,1]

            elif str_date >= str(year) + "-01-01"  and str_date <= str(year) + "-01-25":
                return [year_int,1]

            elif str_date >= str(year) + "-" + month + "-26"  and str_date < str(year) + "-" + next_str_month + "-01":
                return [year_int,next_int_month]

            elif str_date >= str(year) + "-" + month + "-01"  and str_date <= str(year) + "-" + month + "-25":
                return [year_int,int_month]

            else:
                return [0,0]

    else:
        return ""
