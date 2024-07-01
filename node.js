<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        /* Position the link in the bottom right corner */
        .custom-link {
            position: fixed;
            bottom: 10px;
            right: 10px;
            background-color: #0074D9;
            color: #FFFFFF;
            padding: 10px;
            border-radius: 10px;
            text-decoration: none;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <!-- Your website content -->
    <h1>Welcome to My Website!</h1>

    <!-- Custom link -->
    <a class="custom-link" href="about:blank" onclick="openMyWebsite(event)">about:blank</a>

    <script>
        function openMyWebsite(event) {
            // Prevent the default behavior (changing the URL)
            event.preventDefault();

            // Replace with your website URL
            const myWebsiteUrl = 'https://www.example.com';
            window.location.href = myWebsiteUrl;
        }
    </script>
</body>
</html>
