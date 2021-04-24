from django.db import models
from django.conf import settings

# Create your models here.
class Item(models.Model):

    # 複数選ぶことはできなさそう？
    # この中から1個選ぶことしかできなさそうだなあ
    ITEM_CHOICES = (
        (1, '大根'),
        (2, '人参'),
        (3, 'もやし'),
        (4, '卵'),
        (5, '豚肉'),
        (6, '牛肉'),
    )

    item_choices = models.IntegerField(
        verbose_name="食材",
        choices=ITEM_CHOICES,
        blank=False
    )

    def query(self):
        self.save()