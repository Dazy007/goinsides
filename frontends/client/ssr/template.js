export const Template = (muiCss, html, bundle) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <base href="/">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Goinsides - Marketing tools</title>
        <meta name="description" content="Goinsides is a CRM like tools to provides more sales with your client">
        <meta name="keywords" content="Reactjs, Nodejs, Jsx, Express, MongoDB, JavaScript, Mern">
        <meta name="author" content="Mahady Manana">
        <base href="/">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <style>${muiCss}</style>
		<style>
		
			body {
				margin: 0;
			}
			* {
				word-wrap: normal;
			}
			a {
				text-decoration: none;
			}
			a:hover {
				text-decoration: none;
			}
			
		
		</style>
    </head>
    <body>
        <div id="__APP_GO__">${html}</div>
        <script src=${bundle}></script>
	</body>
    </html>
    `;
};
