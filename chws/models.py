# import uuid
from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
from django.contrib.postgres.fields.array import ArrayField
from si.models import DistrictList, SiteList, ChwsCodeList, Year, Month, TypeOfVisitList, PfList

class AllData(models.Model):
    id = models.CharField(primary_key=True, auto_created=False, max_length=255)
    district = models.ForeignKey(DistrictList, related_name='chws_districts', on_delete=models.CASCADE, blank=True, null=True)
    site = models.ForeignKey(SiteList, related_name='chws_sites', on_delete=models.CASCADE, blank=True, null=True)
    chws_code = models.ForeignKey(ChwsCodeList, related_name='chws_chws_code', on_delete=models.CASCADE, blank=True, null=True)
    date = models.DateField(null=True, auto_now=False, auto_now_add=False)
    year = models.ForeignKey(Year, related_name='chws_year', on_delete=models.CASCADE, blank=True, null=True)
    month = models.ForeignKey(Month, related_name='chws_month', on_delete=models.CASCADE, blank=True, null=True)
    visit_type = models.ForeignKey(TypeOfVisitList, related_name='chws_typeofvisit', on_delete=models.CASCADE, blank=True, null=True)
    sex = models.CharField(null=True, max_length=2)
    ac_nc = models.CharField(null=True, max_length=3)
    year_old = models.CharField(null=True, max_length=255)
    consultation_reason = ArrayField(ArrayField(models.IntegerField(null=True)), default=list)
    comment = models.TextField(null=True)
    pregnant_or_postpartum = models.CharField(null=True, max_length=4)
    pf_administered = models.ForeignKey(PfList, related_name='chws_pfs', on_delete=models.CASCADE, blank=True, null=True)
    pf_administered_yes_or_no = models.CharField(null=True, max_length=3)
    counciling = models.CharField(null=True, max_length=3)
    reference = models.CharField(null=True, max_length=3)
    care_or_follow_up = models.CharField(null=True, max_length=3)
    promptness = models.CharField(null=True, max_length=3)
    pregnancy_test = models.IntegerField(null=True)
    ptme = models.IntegerField(null=True)
    created_at = models.DateTimeField(null=True, default=timezone.now, verbose_name="chws_Date of creation")
    created_only_date = models.DateTimeField(null=True, blank=True, verbose_name="chws_creation")
    user_who_create = models.ForeignKey(User, related_name='chws_user_who_create', on_delete=models.CASCADE, blank=True, null=True)
    updated_at = models.DateTimeField(null=True, verbose_name="chws_Date of update")
    user_who_update = models.ForeignKey(User, related_name='chws_user_who_update', on_delete=models.CASCADE, blank=True, null=True)
    number_of_modification = models.IntegerField(null=True, default=0)


# id = models.AutoField(primary_key=True)
# idd = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
# titre = models.CharField(null=True, max_length=100, blank=True)
# auteur = models.CharField(null=True, max_length=42, blank=True)
# contenu = models.TextField(null=True)
# email = models.EmailField(null=True, max_length=254)
# upload = models.FileField(null=True, upload_to=user_directory_path)
# file = models.FilePathField(null=True, path=images_path)
# data = models.FloatField(null=True, max_length=100)
# imyear_old = models.ImageField(null=True, upload_to=None, height_field=None, width_field=None, max_length=100)
# integer = models.IntegerField(null=True, default=0)
# upload = models.FileField(upload_to='uploads/%Y/%m/%d/', max_length=100)
# created_at = models.DateTimeField(null=True, default=timezone.now, verbose_name="Date de parution")
