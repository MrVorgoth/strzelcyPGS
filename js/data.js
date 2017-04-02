$(document).ready(function(){
    $.ajax({
        'url' : 'https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues/serie-a/seasons/15-16/topscorers',
        'type' : 'GET',
        'dataType' : 'json',
        'beforeSend' : function(xhr) {
            xhr.setRequestHeader("X-Mashape-Authorization", "kxSXmUymofmshFHhhKxWOSJpqJsJp1I3zNnjsnqKwhITAiC1zw");
        },
        'success' : function(response) { 
            var topscorers = response.data.topscorers;

            $.each(topscorers, function(key, topscorer){
                var topscorerId = key + 1;

                $("#people").append(
                    '<tr data-toggle="collapse" data-target="#soccer-'+topscorerId+'">'+
                        '<td class="col-md-2">'+topscorerId+'</td>'+
                        '<td class="col-md-8">'+topscorer.fullname+'</td>'+
                        '<td class="col-md-2">'+topscorer.goals+'</td>'+
                    '</tr>'+
                    '<tr>'+
                        '<td colspan="3" class="hidden-row">'+
                            '<div class="accordion-body collapse" id="soccer-'+topscorerId+'">'+
                                '<ul>'+
                                    '<li>Nationality: '+topscorer.nationality.toUpperCase().bold()+'</li>'+
                                    '<li>Number: '+topscorer.number.bold()+'</li>'+
                                    '<li>Position: '+topscorer.position.toUpperCase().bold()+'</li>'+
                                    '<li>Penalties: '+topscorer.penalties.bold()+'</li>'+
                                    '<li>Matches: '+topscorer.matches.bold()+'</li>'+
                                    '<li>Team: '+topscorer.team.toUpperCase().bold()+'</li>'+
                                '</ul>'+
                            '</div>'+
                        '</td>'+
                    '</tr>'
                );
            });
        },
        'error' : function(err) {
            console.log(err);
        }
    });
});