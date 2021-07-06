from django.db import models
from django.conf import settings
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    pass



class Cart(models.Model):
    product = models.CharField(max_length=255)
    quantity = models.IntegerField(default=0)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

class OrderItems(models.Model):
    order = models.ForeignKey('Order', on_delete=models.CASCADE)
    product = models.CharField(max_length=255)
    quantity = models.IntegerField(default=0)
    amount = models.FloatField(default=0)

class Order(models.Model): 
    STATUS_CHOICES =(
        (0,'Processing'),
        (1,'Packing'),
        (2,'Out for Delivery'),     
        (3,'Delivered'),
    )   
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    status = models.IntegerField(choices=STATUS_CHOICES,default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    def __str__(self):
        order_date = self.created_at.strftime('%I:%M%p %d/%b/%y')
        return f'#{self.id} {self.user.username}({order_date})'


