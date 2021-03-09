namespace Terrasoft.Configuration.CardActivationService
{
    using System;
    using System.Linq;
    using System.ServiceModel;
    using System.ServiceModel.Web;
    using System.ServiceModel.Activation;
    using Terrasoft.Core.Configuration;
    using Terrasoft.Core.DB;
    using Terrasoft.Web.Common;

    [ServiceContract]
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
    public class UsrCardActivationService : BaseService
    {

        [OperationContract]
        [WebInvoke(Method = "POST", BodyStyle = WebMessageBodyStyle.Wrapped,
            RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        
        public string CardActivation(string key) {
            StoredProcedure storedProcedure = new StoredProcedure(UserConnection, "cardActivation");
            storedProcedure.WithParameter("cardId", key);
            storedProcedure.PackageName = UserConnection.DBEngine.SystemPackageName;

            using (var dbExec = UserConnection.EnsureDBConnection()) {
                try {
                    dbExec.CommandTimeout = 0;
                    storedProcedure.Execute(dbExec);
                    return "Card activated";
                    
                } catch {
                    return "Failed! Card isn't activated";
                }
            }
        }
    }
}
