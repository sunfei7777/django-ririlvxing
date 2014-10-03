#coding:utf-8
from django.conf.urls import patterns, include, url
from ririlvxing import views

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'lvxing.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^$', views.index, name='index'),
    url(r'^index/$', views.index, name='index'),
    url(r'^exit$', views.exit, name='exit'),
    url(r'^settrip/$', views.settrip, name='settrip'),
    url(r'^login/$', views.login, name='login'),
    url(r'^register/$', views.register, name='register'),
    url(r'^unvalidate/$', views.unvalidate, name='unvalidate'),
    url(r'^regsucc/$', views.regsucc, name='regsucc'),
    url(r'^loginvalidate/$', views.loginvalidate, name='loginvalidate'),
    url(r'^destination/$', views.destination, name='destination'),
)
