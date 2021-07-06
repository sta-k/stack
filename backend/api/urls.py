from rest_framework import routers
from django.urls import path,include

from .views import CartListAPIView, OrderListAPIView

router = routers.DefaultRouter()
router.register(r'cart', CartListAPIView)


app_name='api'

urlpatterns = [
    path('', include(router.urls)),
    path('order/', OrderListAPIView.as_view()),
]