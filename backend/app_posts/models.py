from django.db import models
from django.utils.text import slugify
from django.contrib.auth.models import User

# Create your models here.
class Post(models.Model):
  title = models.CharField(max_length=100, null= False, blank=False)
  body = models.TextField(max_length=300, null=True, blank=True)
  slug = models.SlugField()
  date = models.DateTimeField(auto_now_add=True)
  modified = models.DateTimeField(auto_now=True)
  banner = models.ImageField(default='fallback.png',null=True, blank=True,upload_to="upload/app_posts")
  author = models.ForeignKey(User, on_delete=models.CASCADE, default=None,related_name='post')

  def __str__(self):
    return self.title
  def save(self, **kwargs):
    self.slug = slugify(self.title)
    super(Post, self).save(**kwargs)

  
