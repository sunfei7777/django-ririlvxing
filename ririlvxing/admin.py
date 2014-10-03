from django.contrib import admin
from ririlvxing.models import user
# Register your models here.
class userAdmin(admin.ModelAdmin):
	fields = ['user_name','user_pwd','user_mail','user_tel','user_sex','user_age','user_birth','user_sdcard','user_ag']
	list_display = ['user_name','user_pwd','user_mail','user_tel','user_sex','user_age','user_birth','user_sdcard','user_ag']
	search_fields = ['user_name']
admin.site.register(user,userAdmin)

