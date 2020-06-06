(function ($) {
	
    var navbarCollapse = function () {
       if ($("#mainNav").offset().top > 100) {
           $("#mainNav").addClass("navbar-shrink");
       } else {
           $("#mainNav").removeClass("navbar-shrink");
       }
   };
   
   navbarCollapse();
   
   $(window).scroll(navbarCollapse);
   
   })(jQuery);
                       /* modals */


/*    $("#agree").click(function () {

    $("#agree").parent().on("click", "#agree", function () {

        $("#sign-btn").prop("disabled", false);
        $("#agree").attr("id", "disagree");

    })

        .on("click", "#disagree", function () {

            $("#sign-btn").prop("disabled", true);
            $("#disagree").attr("id", "agree");

        });

});
$("#signterms").click(function () {
    $('#termsofusemodal').modal("show");
});


$.fn.sort_select_box = function () {
    // Get options from select box
    var my_options = $("#" + this.attr('id') + ' option');
    // sort alphabetically
    my_options.sort(function (a, b) {
        if (a.text > b.text) return 1;
        else if (a.text < b.text) return -1;
        else return 0
    })
    //replace with sorted my_options;
    $(this).empty().append(my_options);
};
$('#enterSpecialization').sort_select_box(); */


                  /* end modals */

/* piechart 
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart1);
function drawChart1() {

    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Work', 11],
        ['Eat', 2],
        ['Commute', 2],
        ['Watch TV', 2],
        ['Sleep', 7]
    ]);

    var options = {
        title: 'My Daily Activities',
        is3D: true,// just for 3d 
        // pieHole: 0.4, for dount shape 
        // sliceVisibilityThreshold: 5/8 
       // pieResidueSliceColor
       // pieResidueSliceLabel 
        pieSliceText: 'label',
        legend: 'none',
        slices: {
            3: { offset: 0.2 },
            1: { offset: 0.2 },
            2: { offset: 0.2 },
        },
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
};
 end piechart*/
/* gauge 
google.charts.load('current', { 'packages': ['gauge'] });
google.charts.setOnLoadCallback(drawChart2);

function drawChart2() {

    var data = google.visualization.arrayToDataTable([
        ['Label', 'Value'],
        ['Memory', 80],
        ['CPU', 55],
        ['Network', 68]
    ]);

    var options = {
        width: 300, height: 120,
        redFrom: 90, redTo: 100,
        yellowFrom: 75, yellowTo: 90,
        greenFrom: 40, greenTo: 75,
        minorTicks: 5
    };

    var chart = new google.visualization.Gauge(document.getElementById('guagechart'));

    chart.draw(data, options);

    setInterval(function () {
        data.setValue(0, 1, 40 + Math.round(60 * Math.random()));
        chart.draw(data, options);
    }, 13000);
    setInterval(function () {
        data.setValue(1, 1, 40 + Math.round(60 * Math.random()));
        chart.draw(data, options);
    }, 5000);
    setInterval(function () {
        data.setValue(2, 1, 60 + Math.round(20 * Math.random()));
        chart.draw(data, options);
    }, 26000);
};
   end gauge */

/* dountchart */
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart1);
function drawChart1() {

    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['', 5],
        ['Work', 11],
    ]);

    var options = {
        title: 'My Daily Activities',
        pieHole: 0.4,
        sliceVisibilityThreshold: 1/4 ,
        pieResidueSliceColor:'transparent',
        pieResidueSliceLabel:'none',
        pieSliceText: 'percentage',
        legend: 'none',
        pieStartAngle:270,
        tooltip:{
            trigger: 'none',
        },

    };

    var chart = new google.visualization.PieChart(document.getElementById('dountchart1'));

    chart.draw(data, options);
};
/* ....... */
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart2);
function drawChart2() {

    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['', 4],
        ['Eat', 22],
    ]);

    var options = {
        title: 'percentage',
        pieHole: 0.4,
        sliceVisibilityThreshold: 3/13 ,
        pieResidueSliceColor:'transparent',
        pieResidueSliceLabel:'none',
        pieSliceText: 'percentage',
        legend: 'none',
        pieStartAngle:270,
        tooltip:{
            trigger: 'none',
        },
    };
    var chart = new google.visualization.PieChart(document.getElementById('dountchart2'));
    chart.draw(data, options);
};
/* ......... */
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart3);
function drawChart3() {

    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Work', 11],
        ['Eat', 2],
        ['Commute', 2],
        ['Watch TV', 2],
        ['Sleep', 7]
    ]);
    var options = {
        title: 'My Daily Activities',
        pieHole: 0.4,
        /* sliceVisibilityThreshold: 5/8 
        pieResidueSliceColor
        pieResidueSliceLabel */
        pieSliceText: 'percentage',
    };

    var chart = new google.visualization.PieChart(document.getElementById('dountchart3'));

    chart.draw(data, options);
};
/* end dountchart*/

/*column chart*/
google.charts.load('current', { 'packages': ['bar'] });
google.charts.setOnLoadCallback(drawChart4);

function drawChart4() {
    var data = google.visualization.arrayToDataTable([
        ['Year', 'Sales', 'Expenses', 'Profit'],
        ['2014', 1000, 400, 200],
        ['2015', 1170, 460, 250],
        ['2016', 660, 1120, 300],
        ['2017', 1030, 540, 350]
    ]);

    var options = {
        chart: {
            title: 'Company Performance',
            subtitle: 'Sales, Expenses, and Profit: 2014-2017',
        }
    };

    var chart = new google.charts.Bar(document.getElementById('columnchart1'));


    chart.draw(data, google.charts.Bar.convertOptions(options));
};

/*end column chart*/

/* geochart */
google.charts.load('current', {
    'packages': ['geochart'],
    // Note: you will need to get a mapsApiKey for your project.
    // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
    'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
});
google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
        ['City', 'NOP'],
        [{v:'SY-HA',f:"Al-Hasakah"},800],  
        [{v:'SY-lA',f:'Latakia'}, 200],/*  اللاذقية */
        [{v:'SY-QU',f:'Quneitra'}, 300],/*  قنيطرة */
        [{v:'SY-RA',f:'Ar-Raqqah'}, 1100],/* الرقة */
        [{v:'SY-SU',f:'As-Suwayda'}, 100],/* سويداء */
        [{v:'SY-DR',f:'Daraa'}, 900],/* درعا */
        [{v:'SY-DY',f:'Deir ez-Zor'}, 400],/* ديرالزور */
        [{v:'SY-DI',f:'Damascus'}, 800],/* دمشق */
        [{v:'SY-HL',f:'Aleppo'}, 400],/* حلب */
        [{v:'SY-HM',f:'Hama'}, 700],/* حماه */
        [{v:'SY-HI',f:'Homs'}, 900],/* حوومص */
        [{v:'SY-ID',f:'Idlib'}, 100],/* ادلب */
        [{v:'SY-RD',f:'Rif Dimashq'}, 300],/* ريف دمشق */
        [{v:'SY-TA',f:'Tartus'}, 1000],/* طرطوس */
        
    ]);

    var options = {
        region:'SY',
        resolution: 'provinces',
/*         domain:'SY',
        enableRegionInteractivity:'true', */
        colorAxis: { colors: ['#c1c1cd', 'green']}
    };

    var chart = new google.visualization.GeoChart(document.getElementById('geochart'));

    chart.draw(data, options);
};
/* end geochart */
/*  google.charts.load('current', {
        'packages':['geochart'],
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
      });
      google.charts.setOnLoadCallback(drawRegionsMap);

      function drawRegionsMap() {
        var data = google.visualization.arrayToDataTable([
          ['Country',   'Latitude'],
          ['Algeria', 36], ['Angola', -8], ['Benin', 6], ['Botswana', -24],
          ['Burkina Faso', 12], ['Burundi', -3], ['Cameroon', 3],
          ['Canary Islands', 28], ['Cape Verde', 15],
          ['Central African Republic', 4], ['Ceuta', 35], ['Chad', 12],
          ['Comoros', -12], ['Cote d\'Ivoire', 6],
          ['Democratic Republic of the Congo', -3], ['Djibouti', 12],
          ['Egypt', 26], ['Equatorial Guinea', 3], ['Eritrea', 15],
          ['Ethiopia', 9], ['Gabon', 0], ['Gambia', 13], ['Ghana', 5],
          ['Guinea', 10], ['Guinea-Bissau', 12], ['Kenya', -1],
          ['Lesotho', -29], ['Liberia', 6], ['Libya', 32], ['Madagascar', null],
          ['Madeira', 33], ['Malawi', -14], ['Mali', 12], ['Mauritania', 18],
          ['Mauritius', -20], ['Mayotte', -13], ['Melilla', 35],
          ['Morocco', 32], ['Mozambique', -25], ['Namibia', -22],
          ['Niger', 14], ['Nigeria', 8], ['Republic of the Congo', -1],
          ['Réunion', -21], ['Rwanda', -2], ['Saint Helena', -16],
          ['São Tomé and Principe', 0], ['Senegal', 15],
          ['Seychelles', -5], ['Sierra Leone', 8], ['Somalia', 2],
          ['Sudan', 15], ['South Africa', -30], ['South Sudan', 5],
          ['Swaziland', -26], ['Tanzania', -6], ['Togo', 6], ['Tunisia', 34],
          ['Uganda', 1], ['Western Sahara', 25], ['Zambia', -15],
          ['Zimbabwe', -18]
        ]);

        var options = {
          region: '002', // Africa
          colorAxis: {colors: ['#00853f', 'black', '#e31b23']},
          backgroundColor: '#81d4fa',
          datalessRegionColor: '#f8bbd0',
          defaultColor: '#f5f5f5',
        };

        var chart = new google.visualization.GeoChart(document.getElementById('geochart-colors'));
        chart.draw(data, options);
      }; */
     

