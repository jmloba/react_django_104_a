from django.contrib import admin
from .models import Post


class PostAdmin(admin.ModelAdmin):
  list_display=('title','body','slug','banner','author')
  ordering=('title',)
  list_editable =('slug','banner')
  filter_horizontal=()
  list_filter =()
  fieldsets=()

admin.site.register(Post,PostAdmin)