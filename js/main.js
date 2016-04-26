$(document).ready(function() {
	/* addClass */
		$("#add_class").click(function() {
			$("p:nth-of-type(2)").addClass("adding_class");
		});
	/* removeClass */
		$("#remove_class").click(function() {
			$("p:nth-of-type(2)").removeClass("adding_class");
		});
	/* after */
		$("#after").click(function() {
			$("#this_p").after("<span class='red'> Added after first paragraph</span>");
		});
	/* append */
		$("#append").click(function() {
			$("#this_p2").append("<span class='red'> Appended to this paragraph</span>");
		});
	/* attr */
		$("#attr").click(function() {
			$("#this_p3").text($("img").attr("alt"));
		});
	/* before */
		$("#before").click(function() {
			$("#this_p4").before("<span class='red'>Added before paragraph</span>");
		});
	/* html */
		$("#html").click(function() {
			$("#this_p5").html("<a href='#'><span class='red'>more ...</span></a>");
		});
	/* text */
		$("#text").click(function() {
			$("#this_div p:last-child").text("Some new text.");
		});
	/* val */
		$("#val").click(function() {
			$("#this_div2 p:last-child").text($("#this_div2 input").val());
		});
	/* toggle */
		$("#toggle").click(function() {
			$("#this_p6").toggle(2000, function() {
				$("#this_p6b").text("All done!");
			});
		});
	/* hide */
		$("#hide").click(function() {
			$("#this_p7").hide(2000, function() {
				$("#this_p7b").text("All done!");
			});
		});
	/* show */
		$("#show").click(function() {
			$("#this_p7").show(2000, function() {
				$("#this_p8").show(2000, function() {
					$("#this_p8b").text("All done!");
				});
			});
		});
	/* slideDown */
		$("#slideDown").click(function() {
			$("#this_p9").slideDown(3000, function() {
				$("#this_p9b").slideDown(3000, function() {
					$("#this_p9b").text("All done!");
				});
			});
		});
	/* slideToggle */
		$("#slideToggle").click(function() {
			$("#this_p10").slideToggle(3000, function() {
				$("#this_p10b").slideToggle("slow", function() {
					$("#this_p10b").text("All done!");
				});
			});
		});
	/* slideUp */
		$("#slideUp").click(function() {
			$("#this_p11").slideUp(3000, function() {
				$("#this_p11b").slideUp("slow", function() {
					alert("All done!");
				});
			});
		});
	/* fadeOut */
		$("#fadeOut").click(function() {
			$("#this_p12").fadeOut(3000, function() {
				$("#this_p12b").fadeOut(5000);
			});
		});
	/* fadeIn */
		$("#fadeIn").click(function() {
			$("#this_p13").fadeIn(3000, function() {
				$("#this_p13").append(" All done!");
			});
		});
	/* focus */
		$("#focus input").focus(function() {
			$("#this_p14b").text("You clicked inside the box!");
		});
	/* click */
		$("#click").click(function() {
			$("#this_p15b").text("You clicked the button!");
		});
});