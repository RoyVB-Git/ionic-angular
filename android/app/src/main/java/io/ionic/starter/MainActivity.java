package io.ionic.starter;

import com.getcapacitor.BridgeActivity;

import com.microsoft.appcenter.AppCenter;
import com.microsoft.appcenter.analytics.Analytics;
import com.microsoft.appcenter.crashes.Crashes;

public class MainActivity extends BridgeActivity {

    @Override
    protected void loadApp(String appKey) {
      AppCenter.start(getApplication(), "eaed1aa8-2aff-4dcf-ad80-c827619590e2",
            Analytics.class, Crashes.class);
      super.loadApp(appKey);
    }

}
