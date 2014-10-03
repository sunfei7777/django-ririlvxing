#coding:utf-8
from django.template import RequestContext
from django.shortcuts import render_to_response,render
from django.http import HttpResponse,HttpResponseRedirect
from django.core.mail import EmailMultiAlternatives   
from ririlvxing.models import user

def index(request):
	context = RequestContext(request)
	context_dict = {}
	return render_to_response('index.html',context_dict,context)

def exit(request):
	request.session.clear()
	context = RequestContext(request)
	context_dict = {}
	return render_to_response('login.html',context_dict,context)

def settrip(request):
	context = RequestContext(request)
	context_dict = {}
	return render_to_response('settrip.html',context_dict,context)


def destination(request):
	context = RequestContext(request)
	context_dict = {}
	return render_to_response('destination.html',context_dict,context)


def login(request):
	context = RequestContext(request)
	context_dict = {}
	return render_to_response('login.html',context_dict,context)

def register(request):
	context = RequestContext(request)
	context_dict = {}
	return render_to_response('register.html',context_dict,context)
# 验证用户名是否可用
def unvalidate(request):
	context = RequestContext(request)
	context_dict = {}
	if request.method == 'GET':
		print "get is right"
		name = request.GET.get('us','')
		try:
			obj = user.objects.get(user_name = name)
		except user.DoesNotExist:
			print "Apress isn't in the database yet."
			return HttpResponse('usernameok')
		else:
			print "Apress is in the database."
			print name,"#########################"
			return HttpResponse('userexac')
			
			

def regsucc(request):
	context = RequestContext(request)
	context_dict = {}
	if request.method == 'POST':
		name = request.POST.get('us','')
		password = request.POST.get('password1','')
		sex = request.POST.get('xb_one','')
		age = request.POST.get('nl','')
		birth = request.POST.get('csny','')
		sdcd = request.POST.get('sfzh','')
		mail = request.POST.get('email','')
		ag = request.POST.get('aiguo','')
		tel = request.POST.get('shouji','')
		userObj = user(user_name = name,
			user_pwd = password,
			user_sex = sex,
			user_age = age,
			user_birth = birth,
			user_sdcard = sdcd,
			user_mail = mail,
			user_ag = ag,
			user_tel = tel)
		userObj.save()
		print "save is ok"
		subject,form_email,to = '请激活您的日日旅行系统账号','sunpengfei2014@126.com','2629960826@qq.com'
		text_content = 'This is an important message'
		html_content = u'<b>激活链接：</b><a href="http://www.ririlvxing.com">http:www.ririlvxing.com</a>'
		msg = EmailMultiAlternatives(subject,text_content,form_email,[to])
		msg.attach_alternative(html_content, 'text/html')
		msg.send()
		return render_to_response('regsucc.html',context_dict,context)
			

	return render_to_response('register.html',context_dict,context)

def loginvalidate(request):
	context = RequestContext(request)
	context_dict = {}
	if request.method == 'POST':
		name = request.POST.get('user_name','')
		print name,"#############"
		password = request.POST.get('user_pass','')
		print password,"#############"
		try:
			obj = user.objects.get(user_name = name,user_pwd = password)
		except user.DoesNotExist:
			context_dict['error'] = True
			print "mei you"
			return render_to_response('login.html',context_dict,context)
		else:
			request.session['username'] = name
			return render_to_response('index.html',context_dict,context)
	