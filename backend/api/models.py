from django.db import models


class Category(models.Model):
    class Meta:
        verbose_name_plural = "Categories"
    name = models.CharField(max_length=200, blank=False)
    def __str__(self):
        return self.name

class Product(models.Model):
    name = models.CharField(max_length=200, blank=False)
    tag = models.CharField(max_length=200, blank=False, default='')
    price = models.IntegerField(default=0, blank=False)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, blank=True)
    description = models.TextField(max_length=600, blank=False, default='uwu')
    image = models.ImageField(null=True, default='default.jpg', blank=True)
    stock = models.IntegerField(default=0, blank=False)
    def __str__(self):
        return self.name





# Create your models here.
