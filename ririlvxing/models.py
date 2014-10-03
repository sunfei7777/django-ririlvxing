#coding:utf-8
from django.db import models

# Create your models here.
import simplejson as json
# Create your models here.

'''
用户表 
'''
class user(models.Model):
	user_name = models.CharField(max_length=100,verbose_name='用户名',unique=True)
	user_pwd = models.CharField(max_length=20,verbose_name='密码')
	user_tel = models.CharField(max_length=30,verbose_name='联系电话')
	user_mail = models.EmailField(verbose_name='邮箱')
	user_sex = models.CharField(max_length=30,verbose_name='性别')
	user_age = models.IntegerField(max_length=30,verbose_name='年龄')
	user_birth = models.DateField(verbose_name='出生日期')
	user_sdcard = models.CharField(max_length=30,verbose_name='身份证号')
	user_ag = models.CharField(max_length=30,verbose_name='爱国否？')
	user_mail_conf =models.IntegerField(verbose_name='邮箱确认',default=0,null=True)
	def __unicode__(self):
		return self.user_name

	class Meta:
		verbose_name = '用户'
		verbose_name_plural = '用户表'
