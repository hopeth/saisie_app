from django.db import models


class DistrictList(models.Model):
    district = models.CharField(max_length=100)
    def __str__(self):
        return self.district

class TypeOfVisitList(models.Model):
    typeofvisit = models.CharField(max_length=100)
    filtre = models.IntegerField(null=True, default=0)

    def __str__(self):
        return self.typeofvisit

class SiteList(models.Model):
    site = models.CharField(max_length=100)
    district = models.ForeignKey(DistrictList, related_name='+', on_delete=models.CASCADE, blank=True, null=True)

    def __str__(self):
        return self.site

class ChwsCodeList(models.Model):
    id = models.IntegerField(primary_key=True, auto_created=False, unique=True)
    chws_code = models.CharField(max_length=100)
    site = models.ForeignKey(SiteList, related_name='+',on_delete=models.CASCADE, blank=True, null=True)
    district = models.ForeignKey(DistrictList, related_name='+', on_delete=models.CASCADE, blank=True, null=True)
    icp = models.IntegerField(null=True, default=0)
    
    types = models.CharField(max_length=50, blank=True, null=True)
    new_code_asc = models.CharField(max_length=100, blank=True, null=True)
    fullname = models.CharField(max_length=100, blank=True, null=True)
    en_poste = models.CharField(max_length=5, blank=True, null=True)
    contact = models.CharField(max_length=100, blank=True, null=True)
    sexe = models.CharField(max_length=11, blank=True, null=True)
    zone = models.CharField(max_length=100, blank=True, null=True)
    villages = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return self.chws_code

class PfList(models.Model):
    pf = models.CharField(max_length=20)
    type_pf = models.IntegerField(null=True, default='')

    def __str__(self):
        return self.pf
  
class PromptnessList(models.Model):
    promptness = models.CharField(max_length=10)

    def __str__(self):
        return self.promptness

class PregnantPostpartumList(models.Model):
    enceinte_postpartum = models.CharField(max_length=10)
    filtre = models.IntegerField(null=True, default=0)

    def __str__(self):
        return self.enceinte_postpartum

class CareOrFollowUpList(models.Model):
    care_or_follow_up = models.CharField(max_length=10)
    
    def __str__(self):
        return self.care_or_follow_up

class ConsultationReasonList(models.Model):
    motifs = models.CharField(max_length=20)
    label = models.CharField(max_length=20)
    filtre = models.IntegerField(null=True, default=0)

    def __str__(self):
        return self.motifs

class Year(models.Model):
    year = models.CharField(max_length=10)

    def __str__(self):
        return self.year

class Month(models.Model):
    month = models.CharField(max_length=10)

    def __str__(self):
        return self.month


""" DECLARATION DES CONSTANTES """


def getpromptness():
    try:
        promptnesss = PromptnessList.objects.all()
        p = []
        for promptness in promptnesss:
            p += {
                (promptness.id, promptness.promptness),
            }

        def __str__(self):
            return self.promptnesss.promptness
    except:
        p = [("", ""), ]

    return p


def getEnceintePostpartum(filtre = ""):
    try:
        if filtre == "":
            enceintepostpartum = PregnantPostpartumList.objects.all().order_by('id')
        else:
            enceintepostpartum = PregnantPostpartumList.objects.filter(filtre=filtre).order_by('id')
        p = []
        p += {("", ""), }
        for enceinte_postpartum in enceintepostpartum:
            p += {
                (enceinte_postpartum.id, enceinte_postpartum.enceinte_postpartum),
            }

        def __str__(self):
            return self.enceinte_postpartum.enceinte_postpartum
    except:
        p = [("", ""), ]
    return p


ENCEINTE_POSTPARTUM = getEnceintePostpartum(0)
ENCEINTE_POSTPARTUM_USP = getEnceintePostpartum()
SEXE = (
    ("M", "M"),
    ("F", "F"),
    ("NR", "NR"),
)

PROMPTNESS = getpromptness()


BOOLDEF = (
    ("1", "Oui"),
    ("2", "Non"),
    ("NR", "NR"),
)

ACNC = (
    ("NC", "NC"),
    ("AC", "AC"),
    ("NR", "NR"),
)

CARE_OR_FOLLOW_UP = (
    ("1", "Soins"),
    ("2", "Suivi"),
    ("NR", "NR"),
)

EMPTY = (
    ("", ""),
)
