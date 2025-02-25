function skillsMember()
{
    return{
        restrict: 'E',
        templateUrl:'modules/skills/views/member.html',
        controller:'SkillsMemberController',
        ControllerAs:'vm',
        bindToController:true,
        scope:{
            member:'='
        }
    };
}