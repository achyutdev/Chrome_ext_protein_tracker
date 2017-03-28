$(function(){
    chrome.storage.sync.get(['total','goal'],function(item){
        $('#total').text(item.total);
        $('#goal').text(item.goal);
    });
    $('#addAmount').click(function(){
       chrome.storage.sync.get('total',function(item){
           var newTotal =0;
           if(item.total){
               newTotal+=parseInt(item.total);
           }
           var amount =$('#amount').val();
           if(amount){
               newTotal += parseInt(amount);
           }
           chrome.storage.sync.set({ 'total':newTotal });
           $('#total').text(newTotal);
           $('#amount').val('');
       });
    });
});