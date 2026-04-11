FROM frappe/erpnext:v15

USER frappe
RUN echo '{"socketio_port": 9000}' > /home/frappe/frappe-bench/sites/common_site_config.json && \
    bench get-app payments --branch version-15 && \
    bench get-app hrms --branch version-15 && \
    bench get-app webshop --branch version-15 && \
    bench build && \
    rm /home/frappe/frappe-bench/sites/common_site_config.json

