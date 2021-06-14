(function($) {
    'use strict';
    $(function() {
        var table = $('#example').DataTable({
            "ajax": "js/data.txt",
            "columns": [
                { "data": "Id" },
                { "data": "User" },
                { "data": "Department" },
                { "data": "Email" },
                { "data": "Phone" },
                { "data": "Role" },
                {
                    "className": 'details-control',
                    "orderable": false,
                    "data": null,
                    "defaultContent": ''
                }
            ],
            "order": [
                [1, 'asc']
            ],
            "paging": false,
            "ordering": true,
            "info": false,
            "filter": false,
            columnDefs: [{
                orderable: false,
                className: 'select-checkbox',
                targets: 0
            }],
            select: {
                style: 'os',
                selector: 'td:first-child'
            }
        });


    });
})(jQuery);