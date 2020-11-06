from django.db import models
from si.models import DistrictList, SiteList, Year

 
class IndicatorsList(models.Model):
    id = models.AutoField(primary_key=True)
    indicators_list = models.TextField(null=True)

class ConstantePfSanitaryAreaList(models.Model):
    id = models.AutoField(primary_key=True)
    district = models.ForeignKey(DistrictList, related_name='pf_constante_districts', on_delete=models.CASCADE, blank=True, null=True)
    site = models.ForeignKey(SiteList, related_name='pf_constante_sites',on_delete=models.CASCADE, blank=True, null=True)
    pf_sanitary_area = models.CharField(null=True, max_length=100)
    year = models.ForeignKey(Year, related_name='pf_constante_year', on_delete=models.CASCADE, blank=True, null=True)

class ConstantePcimeSanitaryAreaList(models.Model):
    id = models.AutoField(primary_key=True)
    district = models.ForeignKey(DistrictList, related_name='pcime_constante_districts', on_delete=models.CASCADE, blank=True, null=True)
    site = models.ForeignKey(SiteList, related_name='pcime_constante_sites',on_delete=models.CASCADE, blank=True, null=True)
    pcime_sanitary_area = models.CharField(null=True, max_length=100)
    year = models.ForeignKey(Year, related_name='pcime_constante_year', on_delete=models.CASCADE, blank=True, null=True)


class ConstanteDeliverySanitaryAreaList(models.Model):
    id = models.AutoField(primary_key=True)
    district = models.ForeignKey(DistrictList, related_name='delivery_constante_districts', on_delete=models.CASCADE, blank=True, null=True)
    site = models.ForeignKey(SiteList, related_name='delivery_constante_sites',on_delete=models.CASCADE, blank=True, null=True)
    delivery_sanitary_area = models.CharField(null=True, max_length=100)
    year = models.ForeignKey(Year, related_name='delivery_constante_year', on_delete=models.CASCADE, blank=True, null=True)