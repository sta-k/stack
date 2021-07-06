from django.contrib import admin
from django.contrib.auth import get_user_model
# Register your models here.
class UserAdmin(admin.ModelAdmin):
    search_fields = ('username', )

admin.site.register(get_user_model(), UserAdmin)