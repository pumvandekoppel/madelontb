---
---
{{ partial "header.html" . }}
    {{ .Content }}
    {{ range .Paginator.Pages }}
            {{ partial "summary.html" . }}
        {{ end }}
        {{ partial "pagination.html" . }}
{{ partial "sidebar.html" . }}
{{ partial "footer.html" . }}
