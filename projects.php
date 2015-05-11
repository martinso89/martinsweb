<!DOCTYPE html>
<html xmlns="http:/www.w3.org/1999/xhtml" ng-app="martinsWeb">
    <head>
        <?php include("includes/head.php"); ?>
        <script src="js/angular/controllers/projectsController.js"></script>
    </head>
    <body>
        <p id="sizeIndicator"></p>
        <?php include("includes/topBar.php"); ?>
        <div id="main">
            <?php include("includes/menu.php"); ?>
            <div id="contentBar">
                <?php include("includes/loadBox.php"); ?>
                <div id="content" content="projects"></div>
            </div>
       </div>
    </body>
</html>