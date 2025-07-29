from django.db import models

def emp_upload_path(instance, filename):
  return '/'.join(['employee',str(instance.emp_id),filename])

# eate your models here.
class Employee(models.Model):
  emp_id = models.CharField(max_length=20, unique=True)
  emp_name = models.CharField(max_length=50,null=False,blank=False)
  
  designation  = models.CharField(max_length=50,null=True,blank=True)
  email = models.EmailField(blank=True, null=True)
  gender = models.CharField(blank=True,null=True,max_length=10
                            )
  department  = models.CharField(blank=True,null=True,max_length=50)
  
  # image = models.ImageField(blank=True, null=True, upload_to=emp_upload_path)
  
  image = models.ImageField(blank=True, null=True, upload_to='employee/')
  
  def __str__(self):
    return self.emp_name