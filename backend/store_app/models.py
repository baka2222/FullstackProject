from django.db import models

class ProductModel(models.Model):
    name = models.CharField(verbose_name='Название продукта',
                            max_length=100)
    img = models.ImageField(verbose_name='Изображение',
                            upload_to='imgs/')
    description = models.TextField(verbose_name='Короткое описание')
