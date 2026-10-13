const StyleDictionary = require('style-dictionary');
const path = require('path');

// Resolve token sources and output paths from the project root.
process.chdir(path.resolve(__dirname, '..'));

// ============================================================
// 自定义格式注册
// ============================================================

// JavaFX CSS 主题文件
StyleDictionary.registerFormat({
  name: 'javafx/theme',
  formatter: function ({ dictionary, platform, options, file }) {
    const header = `/*
 * Modern AI Design System - JavaFX Theme
 * Auto-generated from Design Tokens. DO NOT EDIT DIRECTLY.
 *
 * 注意：JavaFX CSS 不原生支持 CSS 自定义属性（--var）。
 * 本文件以注释形式列出所有 token 值，并提供常用样式类供直接引用。
 * 在 JavaFX 代码中可通过 setStyle() 或 FXML styleClass 使用。
 */

.root {
`;

    // 输出所有 token 作为注释 + 可选的 -fx- 属性映射
    let body = '';
    const allTokens = dictionary.allTokens;

    // 颜色 token 映射到 JavaFX 属性
    const colorTokens = allTokens.filter(t => t.attributes?.category === 'color' || t.type === 'color');
    const sizeTokens = allTokens.filter(t =>
      t.attributes?.category === 'space' ||
      t.attributes?.category === 'radius' ||
      t.attributes?.category === 'font' ||
      t.type === 'size'
    );

    body += '\n  /* ===== 颜色 Tokens (作为参考，使用时复制值) ===== */\n';
    colorTokens.forEach(t => {
      body += `  /* ${t.name} = ${t.value} */\n`;
    });

    body += '\n  /* ===== 尺寸 Tokens ===== */\n';
    sizeTokens.forEach(t => {
      body += `  /* ${t.name} = ${t.value} */\n`;
    });

    // 提供常用的 JavaFX 样式类
    const footer = `
  /* ===== JavaFX 基础样式映射 ===== */
  -fx-background-color: #F7F7F9;
  -fx-font-family: -apple-system, "SF Pro Text", "Roboto", sans-serif;
  -fx-font-size: 16px;
  -fx-text-fill: #1C1C1E;
}

/* ===== 背景色类 ===== */
.bg-base { -fx-background-color: #F7F7F9; }
.bg-surface { -fx-background-color: #FFFFFF; }
.bg-hover { -fx-background-color: rgba(0, 0, 0, 0.03); }
.bg-selected { -fx-background-color: rgba(59, 130, 246, 0.08); }
.bg-ai { -fx-background-color: rgba(16, 163, 127, 0.08); }

/* ===== 文字色类 ===== */
.text-primary { -fx-text-fill: #1C1C1E; }
.text-secondary { -fx-text-fill: #374151; }
.text-tertiary { -fx-text-fill: #8E8E93; }
.text-accent { -fx-text-fill: #3B82F6; }
.text-ai { -fx-text-fill: #10A37F; }
.text-success { -fx-text-fill: #10B981; }
.text-warning { -fx-text-fill: #F59E0B; }
.text-error { -fx-text-fill: #EF4444; }

/* ===== 边框类 ===== */
.border-subtle { -fx-border-color: rgba(0, 0, 0, 0.06); -fx-border-width: 1px; }
.border-default { -fx-border-color: #E5E7EB; -fx-border-width: 1px; }
.border-focus { -fx-border-color: #3B82F6; -fx-border-width: 1px; }

/* ===== 圆角类 ===== */
.radius-sm { -fx-background-radius: 8px; -fx-border-radius: 8px; }
.radius-md { -fx-background-radius: 12px; -fx-border-radius: 12px; }
.radius-lg { -fx-background-radius: 16px; -fx-border-radius: 16px; }
.radius-xl { -fx-background-radius: 24px; -fx-border-radius: 24px; }
.radius-pill { -fx-background-radius: 9999px; -fx-border-radius: 9999px; }

/* ===== 按钮样式 ===== */
.button-primary {
  -fx-background-color: #3B82F6;
  -fx-text-fill: #FFFFFF;
  -fx-background-radius: 9999px;
  -fx-font-size: 14px;
  -fx-font-weight: 500;
  -fx-cursor: hand;
}
.button-primary:hover { -fx-background-color: #2563EB; }
.button-primary:pressed { -fx-background-color: #1D4ED8; -fx-scale-x: 0.98; -fx-scale-y: 0.98; }

.button-ai {
  -fx-background-color: #10A37F;
  -fx-text-fill: #FFFFFF;
  -fx-background-radius: 9999px;
  -fx-font-size: 14px;
  -fx-font-weight: 500;
  -fx-cursor: hand;
}
.button-ai:hover { -fx-background-color: #0E8C6D; }

.button-secondary {
  -fx-background-color: #FFFFFF;
  -fx-text-fill: #1C1C1E;
  -fx-border-color: #E5E7EB;
  -fx-border-width: 1px;
  -fx-background-radius: 9999px;
  -fx-border-radius: 9999px;
  -fx-font-size: 14px;
  -fx-cursor: hand;
}
.button-secondary:hover { -fx-background-color: rgba(0, 0, 0, 0.03); }

/* ===== 输入框样式 ===== */
.text-field-pill {
  -fx-background-color: #FFFFFF;
  -fx-border-color: #E5E7EB;
  -fx-border-width: 1px;
  -fx-background-radius: 9999px;
  -fx-border-radius: 9999px;
  -fx-font-size: 16px;
  -fx-padding: 0 20px;
  -fx-pref-height: 48px;
}
.text-field-pill:focused {
  -fx-border-color: #3B82F6;
  -fx-effect: dropshadow(gaussian, rgba(59, 130, 246, 0.1), 0, 0, 0, 0);
}

/* ===== 卡片样式 ===== */
.card {
  -fx-background-color: #FFFFFF;
  -fx-border-color: rgba(0, 0, 0, 0.06);
  -fx-border-width: 1px;
  -fx-background-radius: 16px;
  -fx-border-radius: 16px;
  -fx-padding: 24px;
}
.card-hover:hover { -fx-background-color: rgba(0, 0, 0, 0.02); -fx-cursor: hand; }

/* ===== 侧边栏样式 ===== */
.sidebar {
  -fx-background-color: #F7F7F9;
  -fx-border-color: rgba(0, 0, 0, 0.06);
  -fx-border-width: 0 1px 0 0;
}
.sidebar-item {
  -fx-background-radius: 8px;
  -fx-padding: 0 12px;
  -fx-pref-height: 40px;
  -fx-cursor: hand;
}
.sidebar-item:hover { -fx-background-color: rgba(0, 0, 0, 0.03); }
.sidebar-item-selected {
  -fx-background-color: rgba(59, 130, 246, 0.08);
  -fx-text-fill: #3B82F6;
}

/* ===== 毛玻璃效果 (需要 JavaFX 8+) ===== */
.glass {
  -fx-background-color: rgba(255, 255, 255, 0.7);
  -fx-effect: dropshadow(gaussian, rgba(0, 0, 0, 0.05), 10, 0, 0, 4);
}
`;

    return header + body + footer + '\n';
  }
});

// Java 常量类
StyleDictionary.registerFormat({
  name: 'java/constants',
  formatter: function ({ dictionary, platform, options, file }) {
    const tokens = dictionary.allTokens;
    let output = `package com.designsystem;

/**
 * Modern AI Design System - Java Constants
 * Auto-generated from Design Tokens. DO NOT EDIT DIRECTLY.
 *
 * 适用于 JavaFX、Swing、Android 等 Java 平台。
 */
public final class DesignTokens {

    private DesignTokens() {}

`;

    tokens.forEach(t => {
      const constName = t.name.toUpperCase().replace(/[^A-Z0-9]/g, '_');
      let value = t.value;
      let javaType = 'String';

      // 颜色转为 JavaFX Color 或十六进制字符串
      if (t.type === 'color' || t.attributes?.category === 'color') {
        javaType = 'String';
        value = `"${value}"`;
      } else if (typeof value === 'string' && value.endsWith('px')) {
        javaType = 'double';
        value = value.replace('px', '');
      } else if (typeof value === 'string' && value.endsWith('ms')) {
        javaType = 'int';
        value = value.replace('ms', '');
      } else if (typeof value === 'number') {
        javaType = 'double';
      } else {
        value = `"${value}"`;
      }

      output += `    /** ${t.name} = ${t.value} */\n`;
      output += `    public static final ${javaType} ${constName} = ${value};\n\n`;
    });

    output += `}\n`;
    return output;
  }
});

// Android dimens.xml
StyleDictionary.registerFormat({
  name: 'android/dimens',
  formatter: function ({ dictionary, platform, options, file }) {
    const sizeTokens = dictionary.allTokens.filter(t =>
      t.attributes?.category === 'space' ||
      t.attributes?.category === 'radius' ||
      t.attributes?.category === 'font' ||
      (t.type === 'size' && typeof t.value === 'string' && t.value.endsWith('px'))
    );

    let output = `<?xml version="1.0" encoding="utf-8"?>
<!--
  Modern AI Design System - Android Dimensions
  Auto-generated from Design Tokens. DO NOT EDIT DIRECTLY.
-->
<resources>
`;

    sizeTokens.forEach(t => {
      const resName = t.name.replace(/([A-Z])/g, '_$1').toLowerCase().replace(/[^a-z0-9_]/g, '_');
      let value = t.value;
      // px 转 dp（Android 中 1px ≈ 1dp 在 mdpi 基准，但设计稿通常按 px 设计，这里直接用 dp）
      if (typeof value === 'string' && value.endsWith('px')) {
        value = value.replace('px', 'dp');
      }
      output += `    <dimen name="${resName}">${value}</dimen>\n`;
    });

    output += `</resources>\n`;
    return output;
  }
});

// Android styles.xml (基础样式)
StyleDictionary.registerFormat({
  name: 'android/styles',
  formatter: function ({ dictionary, platform, options, file }) {
    return `<?xml version="1.0" encoding="utf-8"?>
<!--
  Modern AI Design System - Android Styles
  Auto-generated from Design Tokens. DO NOT EDIT DIRECTLY.
-->
<resources>

    <!-- ===== 应用主题 ===== -->
    <style name="Theme.ModernAI" parent="Theme.Material3.DayNight.NoActionBar">
        <item name="colorPrimary">@color/accent_primary</item>
        <item name="colorOnPrimary">@color/text_inverse</item>
        <item name="colorPrimaryContainer">@color/info_bg</item>
        <item name="colorOnPrimaryContainer">@color/accent_primary</item>
        <item name="colorSecondary">@color/accent_ai</item>
        <item name="colorOnSecondary">@color/text_inverse</item>
        <item name="colorSecondaryContainer">@color/accent_ai_bg</item>
        <item name="colorOnSecondaryContainer">@color/accent_ai</item>
        <item name="android:colorBackground">@color/bg_base</item>
        <item name="colorSurface">@color/bg_surface</item>
        <item name="colorOnSurface">@color/text_primary</item>
        <item name="android:statusBarColor">@color/bg_base</item>
        <item name="android:navigationBarColor">@color/bg_base</item>
    </style>

    <!-- ===== 按钮样式 ===== -->
    <style name="Widget.ModernAI.Button.Primary" parent="Widget.Material3.Button">
        <item name="backgroundTint">@color/accent_primary</item>
        <item name="android:textColor">@color/text_inverse</item>
        <item name="cornerRadius">9999dp</item>
        <item name="android:textAllCaps">false</item>
        <item name="android:minHeight">48dp</item>
    </style>

    <style name="Widget.ModernAI.Button.AI" parent="Widget.Material3.Button">
        <item name="backgroundTint">@color/accent_ai</item>
        <item name="android:textColor">@color/text_inverse</item>
        <item name="cornerRadius">9999dp</item>
        <item name="android:textAllCaps">false</item>
        <item name="android:minHeight">48dp</item>
    </style>

    <style name="Widget.ModernAI.Button.Secondary" parent="Widget.Material3.Button.OutlinedButton">
        <item name="strokeColor">@color/border_default</item>
        <item name="android:textColor">@color/text_primary</item>
        <item name="cornerRadius">9999dp</item>
        <item name="android:textAllCaps">false</item>
        <item name="android:minHeight">48dp</item>
    </style>

    <!-- ===== 输入框样式 ===== -->
    <style name="Widget.ModernAI.TextInputLayout.Outlined" parent="Widget.Material3.TextInputLayout.OutlinedBox">
        <item name="boxCornerRadiusTopStart">12dp</item>
        <item name="boxCornerRadiusTopEnd">12dp</item>
        <item name="boxCornerRadiusBottomStart">12dp</item>
        <item name="boxCornerRadiusBottomEnd">12dp</item>
        <item name="boxStrokeColor">@color/border_default</item>
        <item name="hintTextColor">@color/text_tertiary</item>
    </style>

    <style name="Widget.ModernAI.TextInputLayout.Pill" parent="Widget.Material3.TextInputLayout.OutlinedBox">
        <item name="boxCornerRadiusTopStart">9999dp</item>
        <item name="boxCornerRadiusTopEnd">9999dp</item>
        <item name="boxCornerRadiusBottomStart">9999dp</item>
        <item name="boxCornerRadiusBottomEnd">9999dp</item>
        <item name="boxStrokeColor">@color/border_default</item>
        <item name="android:minHeight">56dp</item>
    </style>

    <!-- ===== 卡片样式 ===== -->
    <style name="Widget.ModernAI.Card" parent="Widget.Material3.CardView.Elevated">
        <item name="cardBackgroundColor">@color/bg_surface</item>
        <item name="cardElevation">0dp</item>
        <item name="strokeColor">@color/border_subtle</item>
        <item name="strokeWidth">1dp</item>
        <item name="cardCornerRadius">16dp</item>
        <item name="contentPadding">24dp</item>
    </style>

    <!-- ===== 聊天消息样式 ===== -->
    <style name="Widget.ModernAI.Chat.UserBubble">
        <item name="android:background">@color/chat_user_bubble</item>
        <item name="android:padding">12dp</item>
    </style>

    <style name="Widget.ModernAI.Chat.AIBubble">
        <item name="android:background">@color/chat_ai_bubble</item>
        <item name="android:padding">12dp</item>
    </style>

</resources>
`;
  }
});

// TypeScript 常量
StyleDictionary.registerFormat({
  name: 'typescript/constants',
  formatter: function ({ dictionary, platform, options, file }) {
    const tokens = dictionary.allTokens;
    let output = `/**
 * Modern AI Design System - TypeScript Constants
 * Auto-generated from Design Tokens. DO NOT EDIT DIRECTLY.
 */

export const designTokens = {
`;

    tokens.forEach((t, i) => {
      const key = t.name.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
      const comma = i < tokens.length - 1 ? ',' : '';
      output += `  ${key}: "${t.value}"${comma}\n`;
    });

    output += `} as const;

export type DesignTokenKey = keyof typeof designTokens;
`;
    return output;
  }
});

// ============================================================
// 构建配置
// ============================================================

const config = {
  source: ['tokens/**/*.json'],
  platforms: {
    // CSS 变量
    css: {
      transformGroup: 'css',
      buildPath: 'dist/css/',
      files: [{
        destination: 'variables.css',
        format: 'css/variables',
        options: {
          outputReferences: false,
          showFileHeader: true
        }
      }]
    },

    // SCSS 变量
    scss: {
      transformGroup: 'scss',
      buildPath: 'dist/scss/',
      files: [{
        destination: 'variables.scss',
        format: 'scss/variables',
        options: {
          outputReferences: false,
          showFileHeader: true
        }
      }]
    },

    // Less 变量
    less: {
      transformGroup: 'less',
      buildPath: 'dist/less/',
      files: [{
        destination: 'variables.less',
        format: 'less/variables',
        options: {
          outputReferences: false,
          showFileHeader: true
        }
      }]
    },

    // JavaFX CSS 主题
    javafx: {
      transformGroup: 'css',
      buildPath: 'dist/javafx/',
      files: [{
        destination: 'theme.css',
        format: 'javafx/theme'
      }]
    },

    // Java 常量类
    java: {
      transformGroup: 'js',
      buildPath: 'dist/java/',
      files: [{
        destination: 'DesignTokens.java',
        format: 'java/constants'
      }]
    },

    // Android 颜色资源
    'android-color': {
      transformGroup: 'android',
      buildPath: 'dist/android/',
      files: [{
        destination: 'colors.xml',
        format: 'android/resources',
        filter: (token) => token.attributes?.category === 'color' || token.type === 'color'
      }]
    },

    // Android 尺寸资源
    'android-dimen': {
      transformGroup: 'android',
      buildPath: 'dist/android/',
      files: [{
        destination: 'dimens.xml',
        format: 'android/dimens'
      }]
    },

    // Android 样式资源
    'android-style': {
      transformGroup: 'android',
      buildPath: 'dist/android/',
      files: [{
        destination: 'styles.xml',
        format: 'android/styles'
      }]
    },

    // iOS Swift
    ios: {
      transformGroup: 'ios-swift',
      buildPath: 'dist/ios/',
      files: [{
        destination: 'DesignTokens.swift',
        format: 'ios-swift/class.swift',
        className: 'DesignTokens'
      }]
    },

    // JSON
    json: {
      transformGroup: 'js',
      buildPath: 'dist/json/',
      files: [{
        destination: 'tokens.json',
        format: 'json/nested'
      }]
    },

    // TypeScript
    typescript: {
      transformGroup: 'js',
      buildPath: 'dist/typescript/',
      files: [{
        destination: 'tokens.ts',
        format: 'typescript/constants'
      }]
    }
  }
};

// ============================================================
// 执行构建
// ============================================================

console.log('🔨 开始构建 Design Tokens...\n');

const sd = StyleDictionary.extend(config);
sd.buildAllPlatforms();

console.log('\n✅ 构建完成！输出目录：dist/');
console.log('   📄 css/variables.css      - CSS 自定义属性');
console.log('   📄 scss/variables.scss    - SCSS 变量');
console.log('   📄 less/variables.less    - Less 变量');
console.log('   📄 javafx/theme.css        - JavaFX CSS 主题');
console.log('   📄 java/DesignTokens.java  - Java 常量类');
console.log('   📄 android/colors.xml      - Android 颜色资源');
console.log('   📄 android/dimens.xml      - Android 尺寸资源');
console.log('   📄 android/styles.xml      - Android 样式资源');
console.log('   📄 ios/DesignTokens.swift  - iOS Swift 常量');
console.log('   📄 json/tokens.json        - JSON 格式');
console.log('   📄 typescript/tokens.ts    - TypeScript 常量');

// v3 Web semantic themes, component docs and offline gallery.
require('./build-web.cjs');
