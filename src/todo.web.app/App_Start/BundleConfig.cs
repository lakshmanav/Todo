using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;

namespace todo.web.app.App_Start
{
    public class BundleConfig
    {
        public static void ConfigureBundle(BundleCollection bundles)
        {
            var styles = new Bundle("~/bundles/styles").IncludeDirectory("~/Content", "*.css", searchSubdirectories: true);
            var scripts = new Bundle("~/bundles/scripts").IncludeDirectory("~/Scripts", "*.js", searchSubdirectories: true);
            bundles.Add(styles);
            bundles.Add(scripts);
        }
    }
}