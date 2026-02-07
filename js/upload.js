(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', function () {
        var tagButtons = document.querySelectorAll('.tag-pill');
        var selectedTagsInput = document.getElementById('selectedTagsInput');
        var selectedTagsDisplay = document.getElementById('selectedTagsDisplay');
        var form = document.getElementById('workUploadForm');
        var successBox = document.getElementById('uploadSuccess');
        var dropzone = document.getElementById('fileDropzone');
        var fileInput = document.getElementById('files');
        var fileList = document.getElementById('fileList');

        var selected = new Set();

        function updateFileList(files) {
            if (!fileList) {
                return;
            }
            fileList.innerHTML = '';
            if (!files || !files.length) {
                return;
            }
            Array.prototype.forEach.call(files, function (file) {
                var li = document.createElement('li');
                li.textContent = file.name;
                fileList.appendChild(li);
            });
        }

        // Tag toggle logic
        tagButtons.forEach(function (btn) {
            btn.addEventListener('click', function () {
                var value = btn.getAttribute('data-tag');
                if (!value) {
                    return;
                }

                if (selected.has(value)) {
                    selected.delete(value);
                    btn.classList.remove('selected');
                } else {
                    selected.add(value);
                    btn.classList.add('selected');
                }

                var list = Array.from(selected);
                var textValue = list.join(', ');

                if (selectedTagsInput) {
                    selectedTagsInput.value = textValue;
                }
                if (selectedTagsDisplay) {
                    selectedTagsDisplay.textContent = list.length ? list.join(' • ') : '—';
                }
            });
        });

        // File input: click + change
        if (dropzone && fileInput) {
            // Click anywhere on dropzone triggers file input
            dropzone.addEventListener('click', function () {
                fileInput.click();
            });

            fileInput.addEventListener('change', function () {
                updateFileList(fileInput.files);
            });

            // Drag & drop support
            ['dragenter', 'dragover'].forEach(function (eventName) {
                dropzone.addEventListener(eventName, function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    dropzone.classList.add('dragover');
                });
            });

            ['dragleave', 'drop'].forEach(function (eventName) {
                dropzone.addEventListener(eventName, function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    dropzone.classList.remove('dragover');
                });
            });

            dropzone.addEventListener('drop', function (e) {
                var dt = e.dataTransfer;
                if (!dt || !dt.files || !dt.files.length) {
                    return;
                }

                try {
                    // Assign dropped files to the hidden input (not supported in some very old browsers)
                    fileInput.files = dt.files;
                } catch (err) {
                    // Safe fallback: still show the list even if assignment fails
                }

                updateFileList(dt.files);
            });
        }

        // Demo submit handler
        if (form) {
            form.addEventListener('submit', function (e) {
                e.preventDefault();

                if (successBox) {
                    successBox.classList.add('visible');
                    successBox.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center'
                    });
                }
            });
        }
    });
})();

