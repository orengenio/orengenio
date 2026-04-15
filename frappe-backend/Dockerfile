FROM frappe/erpnext:v15

USER root
# Copy the custom orengen_theme app into the bench apps directory
COPY --chown=frappe:frappe apps/orengen_theme /home/frappe/frappe-bench/apps/orengen_theme

USER frappe
RUN echo '{"socketio_port": 9000}' > /home/frappe/frappe-bench/sites/common_site_config.json && \
    bench get-app payments --branch version-15 && \
    bench get-app hrms --branch version-15 && \
    bench get-app webshop --branch version-15 && \
    pip install -e /home/frappe/frappe-bench/apps/orengen_theme && \
    bench build && \
    rm /home/frappe/frappe-bench/sites/common_site_config.json
