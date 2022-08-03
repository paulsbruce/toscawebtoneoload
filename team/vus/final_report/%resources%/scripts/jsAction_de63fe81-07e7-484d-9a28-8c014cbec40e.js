var url = context.getWebPlatformRunningTestUrl(); //https://neoload-web.neotys.perfreleng.org/#!result/fa06ad18-41f4-4bd2-958f-29a170b9192d/overview

var test_id = null;
if(url != null) {
    var parts = url.split('/')
    test_id = parts[parts.length-2]
} else {
    test_id = '5cd21b4d-ed27-49e1-8d06-1b44e0d07898'
}

var start_date = context.variableManager.getValue("start_date")
var now_date = new Date()
var diff_ms = now_date.getTime() - start_date.getTime();

var workspace_id = '5fd12022430f780001e3fb61'
var nlw_account_token = context.getAccountToken()
if(nlw_account_token == null) nlw_account_token = 'FFDiaZ0w18X4IhCJmDyXfmKC'

logger.info("nlw_account_token: " + nlw_account_token)

context.variableManager.setValue("nlw_workspace_id",workspace_id); 
context.variableManager.setValue("nlw_test_result_id",test_id);
context.variableManager.setValue("nlw_account_token",nlw_account_token);

context.variableManager.setValue("timestamp_epoch",diff_ms)//(new Date()).getTime())