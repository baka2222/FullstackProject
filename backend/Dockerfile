FROM python:3.11-slim
WORKDIR /app
COPY req.txt .
RUN pip install --no-cache-dir -r req.txt
COPY . .
EXPOSE 8000
CMD sh -c "python manage.py makemigrations && \
           python manage.py migrate && \
           python manage.py collectstatic --noinput && \
           python manage.py shell -c \"from django.contrib.auth.models import User; \
           User.objects.filter(username='1').exists() or \
           User.objects.create_superuser('1', '', '1')\" && \
           python manage.py runserver 0.0.0.0:8000"
