from django.utils import timezone
from django.db import models
from django.conf import settings
from si.models import Year, Month, DistrictList, TypeOfVisitList, SiteList, ChwsCodeList, PfList, PromptnessList, PregnantPostpartumList, CareOrFollowUpList, ConsultationReasonList
from django.contrib.postgres.fields.array import ArrayField
from django.contrib.auth.models import User
 

class AllData(models.Model):
    id = models.CharField(primary_key=True, auto_created=False, max_length=255)
    district = models.ForeignKey(DistrictList, related_name='usps_districts', on_delete=models.CASCADE, blank=True, null=True)
    site = models.ForeignKey(SiteList, related_name='usps_sites',on_delete=models.CASCADE, blank=True, null=True)
    usps_code = models.ForeignKey(ChwsCodeList, related_name='usps_chws_code', on_delete=models.CASCADE, blank=True, null=True)
    date = models.DateField(null=True, auto_now=False, auto_now_add=False)
    year = models.ForeignKey(Year, related_name='usps_year', on_delete=models.CASCADE, blank=True, null=True)
    month = models.ForeignKey(Month, related_name='usps_month', on_delete=models.CASCADE, blank=True, null=True)
    visit_type = models.ForeignKey(TypeOfVisitList, related_name='usps_typeofvisit', on_delete=models.CASCADE, blank=True, null=True)
    sex = models.CharField(null=True, max_length=2)
    ac_nc = models.CharField(null=True, max_length=3)
    year_old = models.CharField(null=True, max_length=5)
    consultation_reason = ArrayField(ArrayField(models.IntegerField(null=True)), default=list)
    syndromes_infectieux = models.IntegerField(null=True)
    comment = models.TextField(null=True)
    reference = models.CharField(null=True, max_length=3)
    care_or_follow_up = models.CharField(null=True, max_length=3)
    promptness = models.CharField(null=True, max_length=3)
    pregnant_or_postpartum = models.CharField(null=True, max_length=4)
    ist = models.IntegerField(null=True)
    created_at = models.DateTimeField(null=True, default=timezone.now, verbose_name="usps_Date of creation")
    created_only_date = models.DateTimeField(null=True, blank=True, verbose_name="usps_creation")
    user_who_create = models.ForeignKey(User, related_name='usps_user_who_create', on_delete=models.CASCADE, blank=True, null=True)
    updated_at = models.DateTimeField(null=True, verbose_name="usps_Date of update")
    user_who_update = models.ForeignKey(User, related_name='usps_user_who_update', on_delete=models.CASCADE, blank=True, null=True)
    number_of_modification = models.IntegerField(null=True, default=0)



class CountPaperData(models.Model):
    id = models.CharField(primary_key=True, auto_created=False, max_length=255)
    district = models.ForeignKey(DistrictList, related_name='fiche_districts', on_delete=models.CASCADE, blank=True, null=True)
    site = models.ForeignKey(SiteList, related_name='fiche_sites',on_delete=models.CASCADE, blank=True, null=True)
    date = models.DateField(null=True, auto_now=False, auto_now_add=False)
    year = models.ForeignKey(Year, related_name='fiche_year', on_delete=models.CASCADE, blank=True, null=True)
    month = models.ForeignKey(Month, related_name='fiche_month', on_delete=models.CASCADE, blank=True, null=True)
    consultation_reason = ArrayField(ArrayField(models.IntegerField(null=True)), default=list)
    promptness = models.CharField(null=True, max_length=3)
    created_at = models.DateTimeField(null=True, default=timezone.now, verbose_name="fiche_Date of creation")
    created_only_date = models.DateTimeField(null=True, blank=True, verbose_name="fiche_creation")
    user_who_create = models.ForeignKey(User, related_name='fiche_user_who_create', on_delete=models.CASCADE, blank=True, null=True)
    updated_at = models.DateTimeField(null=True, verbose_name="fiche_Date of update")
    user_who_update = models.ForeignKey(User, related_name='fiche_user_who_update', on_delete=models.CASCADE, blank=True, null=True)
    number_of_modification = models.IntegerField(null=True, default=0)
